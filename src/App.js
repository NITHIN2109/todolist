import React from "react";
import { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
function App() {
  const [menuActive, setmenuActive] = useState("all");

  const [todo, setTodo] = useState("");
  const [todolist, settodoList] = useState([]);

  const handlelcick = (menuitem) => {
    setmenuActive(menuitem);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    if (todo.trim() !== "") {
      settodoList([
        ...todolist,
        { id: Math.random(), Text: todo, checked: false },
      ]);
    }

    setTodo("");
  };

  return (
    <div className="ToDoList">
      <div className="Header">
        <h1>ToDoList</h1>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="Type  new task"
            value={todo}
            className="ToDoInput"
            onChange={(event) => {
              setTodo(event.target.value);
            }}
          />
          <button type="submit"> Add Task</button>
        </form>
      </div>
      <div className="Main">
        <div className=" Menuitemns">
          <button
            className={menuActive === "all" ? "active  item" : "item "}
            onClick={() => handlelcick("all")}
          >
            All
          </button>

          <button
            className={menuActive === "ActiveList" ? "active  item" : "item"}
            onClick={() => handlelcick("ActiveList")}
          >
            Active
          </button>
          <button
            className={menuActive === "Completed" ? "active  item" : " item"}
            onClick={() => handlelcick("Completed")}
          >
            Completed
          </button>
        </div>
        <Todo menu={menuActive} list={todolist} onUpdateList={settodoList} />
      </div>
    </div>
  );
}
export default App;
