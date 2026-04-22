// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0); // it should be const and not let

  function handleAdd() {
    // const newCount = count + 1;
    // setCount(newCount)
    setCount((prevCount) => prevCount + 1); // rewrote the logic
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// The count variable is immutable so to resolve this, creating a newCount variable
// and then setting it to equal count + 1 fixes the issue
// Now setCount will use the newCount and handle Adding 1 to the original count
