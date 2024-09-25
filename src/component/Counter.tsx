import { useDispatch, useSelector } from "react-redux";
import { RootStateApp } from "../app/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counter.slice";

const Counter = () => {
  const count = useSelector((state: RootStateApp) => state.counter.value);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(incrementByAmount({ value: Number(e.target.value) }));
  };

  return (
    <div>
      <p>Counter value: {count}</p>
      <input
        type="number"
        value={count}
        onChange={(e) => handleInputChange(e)}
      />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
