const express = require("express");
const { authMiddleware } = require("../middlewares/middleware");
const { Account } = require("../db");
const mongoose = require("mongoose");
const zod = require("zod");
const router = express.Router();

const transferBody = zod.object({
    amount: zod.number().positive(),
    to: zod.string()
})

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    if (!account) {
        res.status(404).json({
            msg: "Try again later"
        })
        return
    }

    res.json({
        msg: account.balance
    })
})

router.post("/transfer", authMiddleware, async (req, res) => {
    const { success } = transferBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            msg: "Invalid amount or recipient"
        })
    }

    const session = await mongoose.startSession();

    session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({userId: req.userId }).session(session);

    if(!account || account.balance < amount) {
        return res.status(400).json({
            msg: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({userId: to}).session(session)

    if(!toAccount) {
        return res.status(400).json({
            msg: "Account Does not Exist"
        })
    }

    await Account.updateOne({userId: req.userId}, { $inc: {balance: -amount} }).session(session);
    await Account.updateOne({userId: to}, {$inc: {balance: amount} }).session(session)

    await session.commitTransaction();
    res.json({
        msg: "Transferred Successfully"
    })
})

module.exports = router