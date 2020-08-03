import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = () => {
  const items = ['Drink Coffee', 'Build Awesome App'];

  return (
    <ul>
      { items.map((text, index) => <li key={index}><TodoListItem text={text}/></li>) }
    </ul>
  );
};

export default TodoList;