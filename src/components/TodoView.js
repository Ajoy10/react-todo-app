import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import TodoItem from "./TodoItem";

export default function TodoView() {
  const [todos, settodos] = useState(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos) : [];
  });

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const AddTodo = (todoText) => {
    settodos([...todos, { text: todoText, done: false }]);
  };
  const DeleteTodo = (todoId) => {
    settodos([...todos.filter((val, id) => val !== todos[todoId])]);
  };

  const DoneTodo = (todoId) => {
    settodos([
      ...todos.map((todo, i) => {
        if (i === todoId) todo.done = true;
        return todo;
      }),
    ]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div
      style={{ color: theme.text, backgroundColor: theme.background }}
      className="todo-view"
    >
      <TodoAdd theme={theme} AddTodo={AddTodo} />
      <TodoList
        theme={theme}
        DeleteTodo={DeleteTodo}
        DoneTodo={DoneTodo}
        todos={todos}
      />
    </div>
  );
}

function TodoList({ theme, todos, DeleteTodo, DoneTodo }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              refId={index}
              todo={todo}
              onDelete={DeleteTodo}
              onDone={DoneTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

function TodoAdd({ theme, AddTodo }) {
  const [newTodo, setnewTodo] = useState("");
  return (
    <form
      className="todo-add"
      onSubmit={(e) => {
        e.preventDefault();
        AddTodo(newTodo);
        setnewTodo("");
      }}
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
        required
        placeholder="Type something..."
        style={{ color: theme.text, backgroundColor: theme.secondary }}
      />
      <button
        style={{ color: theme.text, backgroundColor: theme.accent }}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
