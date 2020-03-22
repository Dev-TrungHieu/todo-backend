const { insert, updateById, deleteById, findAll, todos } = require('../todo')
describe('test todo model', () => {
  it('Should create todo & return inserted todo', () => {
    const inserted = insert({ id: 1, title: 'First Todo' });
    expect.assertions(3);
    expect(inserted).toEqual({ id: 1, title: 'First Todo', completed: false });
    expect(todos.length).toEqual(1);
    expect(todos[0]).toEqual({ id: 1, title: 'First Todo', completed: false });
  });

  it('Should insert todo & update it', () => {
    let inserted = insert({ id: 2, title: '1234 anh co say em khong ?' });
    let updated = updateById({ id: 2, title: '1234 anh khong say em !' });
    expect.assertions(3);
    expect(updated.title).toEqual('1234 anh khong say em !');
    expect(updated.id).toEqual(2);
    expect(updated.completed).toEqual(false);
  });

  it('Could not found id to update', () => {
    let updated = updateById({ id: 3, title: '1234 anh khong say em !' });
    expect.assertions(1);
    expect(updated).toEqual(false);
  });

  it('Should delete todo by id', () => {
    let deleted = deleteById(1);
    expect.assertions(2);
    expect(todos.length).toEqual(1);
    expect(deleted).toEqual(true);
  });

  it('Could not found id to delete', () => {
    let deleted = deleteById(3);
    expect.assertions(2);
    expect(todos.length).toEqual(1);
    expect(deleted).toEqual(false);
  });

  it('Should find all', () => {
    let todoList = findAll();
    expect(todoList).toEqual(todos);
  });

  it('Should find all with completed = True', () => {
    insert({ id: 3, title: '1234 anh co say em khong ?' });
    insert({ id: 4, title: '1234 anh co say em khong ?' });
    insert({ id: 5, title: '1234 anh co say em khong ?' });
    insert({ id: 6, title: '1234 anh co say em khong ?' });
    updateById({ id: 4, completed: true });
    let todoList = findAll({ completed: false });
    expect(todoList.length).toEqual(4)
  });
});