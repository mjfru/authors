const Author = require('../models/author.model')

module.exports = {

//! Get All:
  getAllAuthors: (req, res) => {
    Author.find({})
      .then((allAuthors) => {
        res.status(200).json(allAuthors)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  },

  //! Get One:
  getOneAuthor: (req, res) => {
    console.log(req.params.id);
    const id = req.params.id
    Author.findById(id)
      .then((oneAuthor) => {
        res.status(200).json(oneAuthor)
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  },

  //! Create
  createAuthor: (req, res) => {
    console.log(req.body);
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(201).json(newAuthor)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },

  //! Update / Edit
  updateAuthor: (req, res) => {
    Author.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
      .then((updatedAuthor) => {
        res.status(201).json(updatedAuthor)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },

  //! Delete
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.status(204).json(result)
      })
  }
}