import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";

export default function TodoItem({ refId, todo, onDone, onDelete }) {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      style={{ color: theme.text, backgroundColor: theme.accent }}
      className={"todo-item" + (todo.done ? " todo-done" : "")}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="todo-actions">
        <button onClick={() => onDelete(refId)}>
          <CloseCircleFilled style={{ color: theme.bad }} />
        </button>
        <button onClick={() => onDone(refId)}>
          <CheckCircleFilled style={{ color: theme.good }} />
        </button>
      </div>
    </div>
  );
}
