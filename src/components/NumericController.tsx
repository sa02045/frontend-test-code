import { useEffect, useState } from "react";

export function NumericController() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <button
        disabled={quantity === 1}
        onClick={() => {
          setQuantity((prev) => {
            if (prev === 1) {
              return 1;
            } else {
              return prev - 1;
            }
          });
        }}
      >
        -
      </button>
      <span>{quantity}개</span>
      <button
        onClick={() => {
          setQuantity((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
