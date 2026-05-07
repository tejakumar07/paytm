const dns = require("dns");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { type } = require("os");
const { email, lowercase, minLength, maxLength, string } = require("zod");
require("dotenv").config();

const connectDB = process.env.MONGO_DB_URL;

dns.setServers(["1.1.1.1", "8.8.8.8"]);

if (connectDB) {
  mongoose
    .connect(connectDB)
    .then(() => {
      console.log("Connected Successfully");
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
    });
} else {
  console.warn(
    "MONGO_DB_URL not set — skipping database connection (safe for local dev or read-only deployments)",
  );
}

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 1000,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 30,
    trim: true,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", UserSchema);

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = {
  User,
  Account,
};
