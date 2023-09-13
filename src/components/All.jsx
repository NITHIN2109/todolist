import React from "react";

function AllList(props) {
  return (
    <>
      {props.list.length === 0 ? (
        <div className="NoTask">No Task</div>
      ) : (
        <ul className="">
          {props.list.map((task) => (
            <li key={task.id}>
              <span>
                <input
                  type="checkbox"
                  checked={task.checked}
                  onChange={() => props.handleCheckboxChange(task.id)}
                />
                <p>{task.Text}</p>
              </span>
              <button
                onClick={() => props.handledeleteList(task.id)}
                className="delete"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AllList;
