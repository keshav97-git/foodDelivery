import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h3>Welcome to My Food Ordering App</h3>
      <Link to={"/menu"}>
        <button>Menu</button>
      </Link>
    </div>
  );
}
