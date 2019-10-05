import { state, register, subscribe } from 'riew';

export const ToDo = (label) => ({ label, completed: false, editing: false });

const initialValue = JSON.stringify([
  ToDo('Riew is reactive view-controller architecture'),
  ToDo('Riew plays well with React')
]);
const saveTodosData = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const todos = state(JSON.parse(localStorage.getItem('todos') || initialValue));

register('todos', todos);

subscribe(todos.pipe(saveTodosData));
