import { useState } from "react";

interface Props {
  defaultValue: "배달" | "포장";
  onChange: (type: "배달" | "포장") => void;
}

export function MenuType({ defaultValue, onChange }: Props) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <label htmlFor="배달">배달</label>
      <input
        id="배달"
        type="radio"
        name="type"
        value="배달"
        checked={value === "배달"}
        onChange={() => {
          setValue("배달");
          onChange("배달");
        }}
      />

      <label htmlFor="포장">포장</label>
      <input
        id="포장"
        name="type"
        type="radio"
        value="포장"
        checked={value === "포장"}
        onChange={() => {
          setValue("포장");
          onChange("포장");
        }}
      />
    </div>
  );
}
