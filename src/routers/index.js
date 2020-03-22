const express = require('express');
const router = express.Router();
const { createTodo, updateTodo, deleteTodo, getTodo, clearTodo } = require('../controllers/todoController')

router.post('/createTodo', createTodo);
router.post('/updateTodo', updateTodo);
router.post('/todos', getTodo);
router.post('/deleteTodo', deleteTodo);
router.post('/clearCompleted', clearTodo);

module.exports = router;