import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const GrandChild = () => {
  const { count, increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Counter:{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default GrandChild;
