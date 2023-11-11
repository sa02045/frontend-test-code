import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  balance: number;
}

export function Transfer({ name, balance }: Props) {
  const [value, setValue] = useState("");
  function handleChange(e: ChangeEvent) {
    e.preventDefault();
    const input = e.target as HTMLInputElement;
    let inputValue = Number(input.value);
    if (isNaN(inputValue)) {
      return;
    }

    if (inputValue >= balance) {
      inputValue = balance;
    }

    const formattedValue = new Intl.NumberFormat("ko-KR", {
      currency: "KRW",
    }).format(inputValue);

    setValue(formattedValue);
  }

  return (
    <div>
      <span>{name}</span>
      <label htmlFor="transfer">송금</label>
      <input onChange={handleChange} value={value} id="transfer" />
    </div>
  );
}
