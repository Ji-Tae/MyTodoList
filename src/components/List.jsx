import React from 'react';
import Card from './Card';

function List({ todos }) {
  return (
    <div>
      <div>
        <h2>What to do</h2>
        {todos.map((el) => {
          return <Card el={el} key={el.id} />;
        })}
      </div>
      <div>
        <h2>isDone</h2>
        {todos.map((el) => {
          return <Card el={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default List;
