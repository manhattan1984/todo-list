import React from "react";

const ToDoItem = ({
  completed,
  message,
}: {
  completed: boolean;
  message: string;
}) => {
  return (
    <div className="flex gap-2 w-full justify-center">
      <input defaultChecked={completed} type="checkbox" name="" id="" />
      <p>{message}</p>
      <button>X</button>
    </div>
  );
};

export default ToDoItem;
