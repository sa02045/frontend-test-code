import { useState } from "react";

interface TransferProps {
  name: string;
  balance: number;
}
export function Transfer({ name, balance }: TransferProps) {
  const [value, setValue] = useState("0");
  return (
    <div>
      <h1>{name}</h1>
      <input
        value={value}
        aria-label="송금"
        onChange={(e) => {
          let formattedValue = e.target.value;
          formattedValue = formattedValue.replace(/\D/g, "");
          let numberValue = Number(formattedValue).toLocaleString("ko-KR");
          if (Number(formattedValue) > balance) {
            numberValue = balance.toLocaleString("ko-KR");
          }
          setValue(numberValue);
        }}
      />
    </div>
  );
}
