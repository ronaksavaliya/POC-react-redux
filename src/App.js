import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment,decrement } from "./store/actions/numActions";

function App() {
  const dispatch = useDispatch();
  const number = useSelector((state)=>{return state.numReducer})

  function handleDecrement() {
    dispatch(decrement(5));
  }

  function handleIncrement() {
    dispatch(increment(10));
  }

  return (
    <>
      <div>
        <button onClick={handleDecrement}> - </button>
        <span> {number} </span>
        <button onClick={handleIncrement}> + </button>
      </div>
    </>
  );
}

export default App;
