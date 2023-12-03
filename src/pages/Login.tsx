import { useState } from "react";
import { useNavigate } from "react-router";
export function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/profile");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
