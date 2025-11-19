import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div class="counter">
      <h1>Hello World with SolidJs!</h1>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)} type="button">
        Increment
      </button>
    </div>
  );
}
