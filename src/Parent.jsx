import { CounterProvider } from "./CounterContext";
import Child from "./Child";
const Parent = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    </CounterProvider>
  );
};

export default Parent;
