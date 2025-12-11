import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="title">Hello World</h1>
      <p data-testid="count">Clickedd {count} times</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}
