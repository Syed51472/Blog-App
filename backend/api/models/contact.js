const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://meanproject:mean123@cluster0.rg4zc.mongodb.net/meanDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
var conn = mongoose.Collection;

var contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match:
      /[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

var contactModel = mongoose.model("Contacts", contactSchema);
module.exports = contactModel;
