import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import GrandChild from "./GrandChild";

const Child = () => {
  const { count } = useContext(CounterContext);
  return (
    <div>
      <h2>Child Component</h2>
      <p>Counter:{count}</p>
      <GrandChild />
    </div>
  );
};

export default Child;
