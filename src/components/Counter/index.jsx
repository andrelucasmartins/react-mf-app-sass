import { useState } from "react";

import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCounter] = useState(0);

  function handleCounter() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <button className={styles.counterButton} onClick={handleCounter}>
      count ({count})
    </button>
  );
};
