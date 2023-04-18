import React from 'react';
import Card from './Card';

function List({ todos, setTodos }) {
  return (
    <div>
      <div>
        <h2>What to do</h2>
        {todos.map((el) => {
          if (!el.isDone) {
            return (
              <Card el={el} key={el.id} todos={todos} setTodos={setTodos} />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div>
        <h2>isDone</h2>
        {todos.map((el) => {
          if (el.isDone) {
            return (
              <Card el={el} key={el.id} todos={todos} setTodos={setTodos} />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
