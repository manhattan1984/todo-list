"use client";

import React, { useRef } from "react";
import { useSupabase } from "../(context)/supabase-provider";

const ToDoItem = ({
  completed,
  message,
  id,
}: {
  completed: boolean;
  message: string;
  id: number;
}) => {
  //   const completedRef = useRef();
  const { supabase } = useSupabase();
  const deleteTodo = async () => {
    const { data, error } = await supabase.from("todos").delete().eq("id", id);

    console.log("data", data);
    console.log("error", error);
  };

  const updateTodo = async () => {
    const x = await supabase
      .from("todos")
      .update({ completed: !completed })
      .eq("id", id);

    console.log(x);
  };

  return (
    <div className="flex gap-2 w-full justify-center">
      <input
        // ref={completedRef}
        onChange={updateTodo}
        defaultChecked={completed}
        type="checkbox"
        name=""
        id=""
      />
      <p>{message}</p>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
};

export default ToDoItem;
