import axios from "axios";
import { useEffect, useState } from "react";

export function TestComponent() {
  const [text, setText] = useState("");
  useEffect(() => {
    axios.get("/resource").then((res) => {
      setText(res.data);
    });
  }, []);

  return <div>{text}</div>;
}
