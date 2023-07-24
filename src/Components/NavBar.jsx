import { useNavigate } from "react-router-dom";
import "../Styles/nav.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar navbar-dark bg-primary">
      <h2 onClick={() => navigate("/stocks")}>Home</h2>
      <h2 onClick={() => navigate("/mystock")}>My Stocks</h2>
      <h2 onClick={() => navigate("/about")}>About</h2>
    </div>
  );
}

export default NavBar;
