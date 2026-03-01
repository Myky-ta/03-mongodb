const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false, // ❌ прибирає поле __v
  }
);

const Contact = model("Contact", contactSchema);

module.exports = { Contact };
