import React from 'react';
import Card from './Card';

function List({ todos }) {
  return (
    <div>
      <div>
        <h2>What to do</h2>
        {todos.map((el) => {
          if (el.isDone === false) {
            return <Card el={el} key={el.id} todos={todos} />;
          }
        })}
      </div>
      <div>
        <h2>isDone</h2>
        {todos.map((el) => {
          if (el.isDone === true)
            return <Card el={el} key={el.id} todos={todos} />;
        })}
      </div>
    </div>
  );
}

export default List;
