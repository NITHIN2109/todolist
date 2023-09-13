import React from "react";
import AllList from "./All";

function Todo(props) {
  const handleCheckboxChange = (taskId) => {
    const updatedList = props.list.map((task) => {
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    props.onUpdateList(updatedList);
  };

  const handledeleteList = (taskId) => {
    const updatedList = props.list.filter((task) => taskId !== task.id);
    props.onUpdateList(updatedList);
  };

  const CompletedTask = props.list.filter((task) => task.checked);

  const ActiveList = props.list.filter((task) => !task.checked);

  let rendercomponent;

  if (props.menu === "all") {
    rendercomponent = (
      <AllList
        menu={props.menu}
        list={props.list}
        handleCheckboxChange={handleCheckboxChange}
        handledeleteList={handledeleteList}
      />
    );
  } else if (props.menu === "ActiveList") {
    rendercomponent = (
      <AllList
        menu={props.menu}
        list={ActiveList}
        handleCheckboxChange={handleCheckboxChange}
        handledeleteList={handledeleteList}
      />
    );
  } else if (props.menu === "Completed") {
    rendercomponent = (
      <AllList
        menu={props.menu}
        list={CompletedTask}
        handleCheckboxChange={handleCheckboxChange}
        handledeleteList={handledeleteList}
      />
    );
  }
  return <div>{rendercomponent}</div>;
}
export default Todo;
