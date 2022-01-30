import logo from "./images/noteLogo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <img src={logo} height="40" alt="Logo" />
        <h2>NoteDown</h2>
      </header>
    </div>
  );
};

export default Navbar;
