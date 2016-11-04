/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getTodoList: (req, res) => {
    Todo.find().sort('createdAt desc').then(todos => {
      return res.render('todoList', { todos: todos })
    }).catch(err => {
      sails.log.error(err)
      return res.serverError()
    })
  },
  getTodo: (req, res) => {
    Todo.findOne(req.params.id).populateAll().then(todo => {
      return res.render('todo', { todo: todo })
    }).catch(err => {
      sails.log.error(err)
      return res.serverError()
    })
  }
};
