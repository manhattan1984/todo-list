"use client";

import { useRef, useState } from "react";
import ToDoItem from "./(components)/TodoItem";

function HomePage() {
  const [todoItems, setTodoItems] = useState([]);
  const messageRef = useRef();
  return (
    <div className="h-screen w-screen bg-neutral-100">
      <div className="mx-auto w-4/5 mb-4">
        <div className="flex justify-center">
          <input ref={messageRef} type="text" />
          <button
            onClick={() => {
              setTodoItems((items) => [
                ...items,
                { id: 1, message: messageRef.current.value, completed: false },
              ]);
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-2">
        {todoItems.map((todo, index) => (
          <ToDoItem {...todo} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
