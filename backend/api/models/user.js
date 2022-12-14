const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://meanproject:mean123@cluster0.rg4zc.mongodb.net/meanDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
    match:
      /[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

var userModel = mongoose.model("Users", userSchema);
module.exports = userModel;

// meanproject
// mean123
// mongodb+srv://<username>:<password>@cluster0.rg4zc.mongodb.net/?retryWrites=true&w=majority
