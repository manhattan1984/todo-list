"use client";

import { useRef, useState } from "react";
import ToDoItem from "./(components)/TodoItem";
import { useSupabase } from "./(context)/supabase-provider";

function HomePage({ todos }) {
  const messageRef = useRef();
  const { supabase } = useSupabase();
  const insertTodo = async () => {
    const { data, error } = await supabase
      .from("todos")
      .insert([{ message: messageRef.current.value }]);
    console.log("data", data);
    console.log("error", error);
  };

  return (
    <div className="h-screen w-screen bg-neutral-100">
      <div className="mx-auto w-4/5 mb-4">
        <div className="flex justify-center">
          <input ref={messageRef} type="text" />
          <button onClick={insertTodo}>Add</button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        {todos.map((todo, index) => (
          <ToDoItem key={index} {...todo} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
