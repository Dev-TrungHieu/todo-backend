const todos = [];

exports.insert = (todo) => {
  let length = todos.length;
  if (length == 0) {
    let insertTodo = { id: 0, title: todo, completed: "false" };
    todos.push(insertTodo);
    return insertTodo;
  } else {
    let insertTodo = { id: parseInt(todos[todos.length - 1].id + 1), title: todo, completed: "false" };
    todos.push(insertTodo);
    return insertTodo;
  }
};

exports.updateById = todo => {
  let foundTodo = todos.filter(t => t.id == todo.id); // return todo || undefind
  console.log(foundTodo);
  if (foundTodo.length == 0) {
    return false;
  } else {
    foundTodo = Object.assign(foundTodo[0], todo);
    return foundTodo;
  }
};

exports.deleteById = id => {
  const foundIndex = todos.findIndex(t => t.id === id); // return index || undefind

  if (foundIndex === -1) {
    return false;
  } else {
    todos.splice(foundIndex, 1);
    return true;
  }
}

exports.findAll = params => {
  if (!params) {
    return todos;
  } else {
    const { completed } = params;
    return todos.filter(t => t.completed === completed);
  }
}

exports.todos = todos;