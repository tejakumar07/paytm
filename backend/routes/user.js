const express = require("express");
const zod = require("zod");
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken");
const { User, Account } = require("../db");
const { authMiddleware } = require("../middlewares/middleware");
const bcrypt = require("bcrypt");
const app = express();

const router = express.Router();
app.use(express.json())


const signupBody = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
})

const updateBody = zod.object({
    password : zod.string().optional(),
    firstName : zod.string().optional(),
    lastName : zod.string().optional()
})


router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({msg: "Bad Requests"})
    }

    const existingUser = await User.findOne({
        email: req.body.email
    })

    if (existingUser) {
        return res.status(411).json({
            msg: "User already Exisit Please Login"
        })
    }

    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 1000
    })

    const token = jwt.sign({userId}, JWT_SECRET);

    res.json({
        message: "User Created Successfully",
        token: token
    })
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);

    if(!success) {
        res.status(411).json({
            msg: "Bad Inputs"
        })
    }

    try {

        const user = await User.findOne({
        email: req.body.email
        })

        const isPasswordValid = user && (await bcrypt.compare(req.body.password, user.password));

        if(isPasswordValid) {
        const token = jwt.sign({userId: user._id}, JWT_SECRET);
        res.json({
            msg: token
        })
        return
        }
    }
    catch(e) {
        return res.status(411).json({msg: e})
    }
    return res.status(411).json({
        msg: "User Does Not exist!"
    })
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    
    if(!success) {
        return res.status(411).json({
            msg: "Error while updating information"
        })
    }

    try {
        const updates = {};
        if (req.body.firstName) {
            updates.firstName = req.body.firstName;
        }

        if (req.body.lastName) {
            updates.lastName = req.body.lastName
        }

        if (req.body.password) {
            updates.password = await bcrypt.hash(req.body.password, 10)
        }

        if(Object.keys(updates).length === 0) {
            return res.status(400).json({
                msg: "No valid Changes to update"
            })
        }

        const result = await User.updateOne(
            {_id: req.userId},
            {$set: updates}
        )

        if(result.matchedCount === 0) {
            return res.status(400).json({
                msg: "User Not Found"
            })
        }

        res.json({
            msg: "User updated Successfully"
        })

    }

    catch(error) {
        res.status(500).json({
            msg: "Internal Server Error"
        })
    }

})


router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        "$or": [{
            firstName: {
                "$regex": filter,
                "$options": i
            }
        }, {
            lastName: {
                "$regex": filter,
                "$options": i
            }
        }, {
            username: {
                "$regex": filter,
                "$options":i
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})


module.exports = router;