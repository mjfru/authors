const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, "You must enter an authors name."],
    minLength: [3, "Author names must be at least 3 characters."]
  },

  famousWork: {
    type: String,
    required: [true, "You must enter something this author has written"],
    minLength: [1, "Surely their work has at least 1 character..."]
  },

  quote: {
    type: String,
    minLength: [2, "Quotes should be at least 2 characters long..."]
  }
})

const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author