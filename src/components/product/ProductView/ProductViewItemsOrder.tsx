"use client";

import { SyntheticEvent, useState } from "react";
import styles from "./ProductViewItemsOrder.module.sass";

interface ProductViewItemsOrderProps {
  maxQuantity: number;
}

export const ProductViewItemsOrder = ({
  maxQuantity,
}: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  };

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  };

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>Counter</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewItemsOrder__form}
      >
        <button className={styles.ProductViewItemsOrder__submit} type="submit">
          <span>Add To Cart</span>
        </button>
      </form>
    </div>
  );
};
