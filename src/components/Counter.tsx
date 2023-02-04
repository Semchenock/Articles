import { useState } from "react"
import classes from './Counter.module.scss';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  function incrementHandler(): void {
    setCounter(counter+1);
  }
  return <div className={classes.btn}>
    <h1>{counter}</h1>
    <button onClick={incrementHandler}>Increment</button>
  </div>
}