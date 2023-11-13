const router = require("express").Router();
const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
require('dotenv').config();

router.route("/add").post(async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
    });
    newUser
      .save()
      .then((user) => res.json({name: user.name, userId: user._id}))
      .catch((err) => res.status(400).json(err));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      return res.status(400).send("Cannot find user");
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      
      const secretKey = process.env.ACCESS_TOKEN_SECRET;
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
      res.json({ message: "Success", username:user.name,userId: user._id, token });
    } else {
      res.send("Wrong Password");
    }
  } catch {
    res.status(500).send();
  }
});

module.exports = router;
