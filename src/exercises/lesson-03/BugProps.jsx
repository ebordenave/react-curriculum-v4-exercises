// src/exercises/lesson-03/BugProps.jsx

import { useState, useEffect } from 'react';

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);
  // const message = 'Hello, ' + name;
  useEffect(() => {
    setMessage('Hello, ' + name);
  }, [name]);

  function handleChange() {
    setMessage('Hello, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>
        Change Greeting
      </button>
    </div>
  );
}

// Explanation:
// In React, simply providing a function that changes the data doesn't work because
// React doesn't track regular variables. Instead, it requires a useState hook to
// observe the state of the message so the UI knows when to re-render. We then use a
// useEffect to "watch" the name prop; this way, if the name changes from the outside,
// the effect triggers and updates our message to match.
