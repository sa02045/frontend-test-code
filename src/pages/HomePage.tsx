import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <div>
      <Link to="/login">
        <button>로그인 하러가기</button>
      </Link>
    </div>
  );
}
