const authorController = require('../controllers/author.controller')

module.exports = (app) => {
  app.get('/api/allAuthors', authorController.getAllAuthors)
  app.get('/api/oneAuthor/:id', authorController.getOneAuthor)
  app.post('/api/newAuthor', authorController.createAuthor)
  app.put('/api/updateAuthor/:id', authorController.updateAuthor)
  app.delete('/api/deleteAuthor/:id', authorController.deleteAuthor)
}