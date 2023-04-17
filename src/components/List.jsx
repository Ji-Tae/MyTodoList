import React from 'react';
import Card from './Card';

function List({ todos }) {
  return (
    <div>
      <div>
        <h2>What to do</h2>
        <Card todos={todos} />
      </div>
      <div>
        <h2>isDone</h2>
        <Card todos={todos} />
      </div>
    </div>
  );
}

export default List;
