import { useCounter } from "@src/stores";

export const Count = () => {
  const count = useCounter((state) => state.counter);
  return <span style={{ marginLeft: "1rem" }}>{count}</span>;
};
