import { useCounter } from "@src/stores";
import { Count } from "./count";

const Counter = () => {
  const { increment, decrement } = useCounter();

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <button className="button button-primary" onClick={increment}>
        Increment
      </button>
      <button className="button button-primary" onClick={decrement}>
        Decrement
      </button>
      <Count />
    </div>
  );
};

export default Counter;
