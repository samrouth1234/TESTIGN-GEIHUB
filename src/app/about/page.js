"use client";
import React from "react";
import { useState, useEffect } from "react";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const MyComponent = () => {
  const [counter, setCounter] = useState(0);
  const [decrease ] = useState(1);

  useEffect(() => {
    // Load counter value from localStorage when the component mounts
    const savedCounter = getFromLocalStorage("counter");
    if (savedCounter !== null) {
      setCounter(savedCounter);
    }
  }, []);

  useEffect(() => {
    // Save counter value to localStorage whenever it changes
    saveToLocalStorage("counter", counter);
  }, [counter]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decreaseCounter = () => {
    setCounter((prevCounter) => prevCounter - decrease);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div className="text-center mt-[50px]">
      <h1 className="text-black text-2xl m-6">Counter: {counter}</h1>
      <button
        onClick={incrementCounter}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Increment
      </button>
      <button
        onClick={decreaseCounter}
        className="text-white bg-green-400  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Decreases
      </button>
      <button
        onClick={resetCounter}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Reset
      </button>
    </div>
  );
};

export default MyComponent;
