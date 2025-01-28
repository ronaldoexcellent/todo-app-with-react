import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => {
    return (
        <ul className="space-y-2 bg-white">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
            ))}
        </ul>
    );
};

export default TodoList;