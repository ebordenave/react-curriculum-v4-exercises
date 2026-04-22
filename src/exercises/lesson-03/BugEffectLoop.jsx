//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1); // getting linter error here at setCount
  }, []);

  return <p>Bug 1 Count: {count}</p>; // value should just be 1
}

// Explanation:
// The original code caused an infinite loop because the effect
// updated count while also "watching" count as a dependency.
// Each update triggered a re-render, which re-ran the effect,
// starting the cycle again. By changing the dependency array to [],
// the effect runs only once when the component mounts. Even though
// setCount triggers a re-render to display the new value,
// the useEffect sees the empty dependency array and knows not
// to run its logic a second time.
