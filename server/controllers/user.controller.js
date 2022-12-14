const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    console.log("in register");
    console.log(req.body);

    const user = new User(req.body);
    user
      .save()
      .then((newUser) => {
        console.log(newUser);
        res.json({
          successfulMesssage: "Thank you for registering",
          user: newUser,
        });
      })
      .catch((err) => {
        console.log("regester not successful");
        console.log(err);
        res.status(400).json(err);
      });
  },

  login: (req, res) => {
    User.findOne({ username: req.body.username })
      .then((userRecord) => {
        if (userRecord === null) {
          res.status(400).json({ message: "Invalid login attempt" });
        } else {
          bcrypt
            .compare(req.body.password, userRecord.password)
            .then((isPasswordValid) => {
              if (isPasswordValid) {
                console.log("Password is valid");
                res
                  .cookie(
                    "usertoken",
                    jwt.sign(
                      {
                        id: userRecord._id,
                        username: userRecord.username,
                      },
                      process.env.JWT_SECRET
                    ),
                    {
                      httpOnly: true,
                      expires: new Date(Date.now() + 90000000),
                    }
                  )
                  .json({
                    message: "Successfully logged in",
                    userLoggedIn: userRecord.username,
                    userId: userRecord._id,
                  });
              } else {
                res.status(400).json({
                  message: "Login and/or email Invalid!",
                });
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({
                message: "Invalid attempt",
              });
            });
        }
      })
      .catch((err) => {
        console.log("error");
        res.status(400).json({ message: "Invalid Attempt" });
      });
  },

  logout: (req, res) => {
    console.log("logging out");
    res.clearCookie("usertoken");
    res.json({
      message: "You have successfully logged out",
    });
  },

  getOneUser: (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((oneUser) => {
        console.log(oneUser);
        res.json(oneUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  deleteUser: (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((deletedUser) => {
        console.log(deletedUser);
        res.json(deletedUser);
      })
      .catch((err) => {
        console.log("deleteUser failed");
        res.json({
          message: "Something went wrong with deleteUser",
          error: err,
        });
      });
  },
};
