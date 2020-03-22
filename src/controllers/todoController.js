const todoModel = require('../models/todo');

exports.createTodo = (req, res) => {
  let data = req.body.title;
  let inserted = todoModel.insert(data);
  res.json(todoModel.todos);
};

exports.getTodo = (req, res) => {
  let param = req.body.completed;
  let todoList = todoModel.findAll();
  res.json(todoList);
};

exports.updateTodo = (req, res) => {
  let data = req.body;
  let todoUpdated = todoModel.updateById(data);

  res.json(todoUpdated);
};

exports.deleteTodo = (req, res) => {
  let id = req.body.id;
  let deleted = todoModel.deleteById(id);
  res.json(deleted);
};
exports.clearTodo = (req, res) => {
  let todoList = todoModel.findAll();
  console.log(todoList);
  todoList.map(elm => {
    console.log(elm);
    todoModel.deleteById(elm.id);
  });
  console.log(todoList);
  res.json(todoList);
};