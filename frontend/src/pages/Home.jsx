import { Link } from "react-router-dom";
import "./Home.css"; // optional for styling

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to CampusConnect</h1>
      <p>Your central platform for student support services</p>

      <div className="home-buttons">
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
