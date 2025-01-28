import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4 bg-green-900">
      <h1 className="text-2xl font-bold mb-4 font-serif text-white">Todo App With React</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Add a new todo"
        />
        <button onClick={addTodo} className="bg-yellow-600 hover:bg-yellow-500 text-white p-2 ml-2">
          Add
        </button>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;