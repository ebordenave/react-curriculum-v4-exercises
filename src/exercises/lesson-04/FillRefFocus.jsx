// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
// useRef is a React Hook that lets you reference a value that’s not
// needed for rendering.

import { useRef } from 'react';

export default function FillRefFocus() {
  // source: react.dev documentation
  const ref = useRef(null);

  // React will set the current property of your ref object to that DOM node.
  function focusInput() {
    ref.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>
      {/* <input ref={nameRef} type="text" name="name" id="name"/> */}
      <input
        ref={ref}
        type="text"
        placeholder="Type here..."
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
