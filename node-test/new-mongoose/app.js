const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");
const validator = require("validator");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        if (validator.isEmail("value")) throw new Error("This is not an Email");
      },
    },
  },
  password: {
    type: String,
    required: true, //필수값
    trim: true, //앞뒤 공백을 없애준다
  },
  age: {
    type: Number,
    default: 0, //값을 안넣으면 무조건 0
  },
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name: "cjo",
  email: "jjjj@naver.com",
  password: "  1sssaa",
});

// newUser.save().then((value) => console.log("value", value));

User.find({ name: "ssu" })
  .select("name -_id")
  .then((value) => console.log("all", value));
