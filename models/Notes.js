const mongoose = require("mongoose");
const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxLength: [40, "Title cannot be more them than 40 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxLength: [200, "Description cannot be more than 200 characters"],
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", notesSchema);
