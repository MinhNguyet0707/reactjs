import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    const title = window.prompt("Nhập tiêu đề công việc mới:");
    if (title) {
      const newTodo = { title, status: "pending" };
      setTodos([...todos, newTodo]);
    }
  };


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  const editTodo = (index) => {
    const newTitle = window.prompt("Nhập tiêu đề mới:");
    if (newTitle) {
      const newTodos = [...todos];
      newTodos[index].title = newTitle;
      setTodos(newTodos);
    }
  };


  const toggleStatus = (index) => {
    const newTodos = [...todos];
    const currentStatus = newTodos[index].status;
    newTodos[index].status =
      currentStatus === "pending" ? "completed" : "pending";
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration:
                    todo.status === "completed" ? "line-through" : "none",
                }}
                onClick={() => toggleStatus(index)}
              >
                {todo.title}
              </span>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Danh sách công việc trống</p>
      )}
      <button onClick={addTodo}>Add Todo List</button>
    </div>
  );
};

export default TodoList;
