import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbrand-brandname">ICARUS</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link active">
          Home
        </Link>
        <Link to="/committee" className="navbar-link">
          Committee
        </Link>
        <Link to="/call-for-papers" className="navbar-link">
          Call For Papers
        </Link>
        <Link to="/important-dates" className="navbar-link">
          Important Dates
        </Link>
        <Link to="/Workshops" className="navbar-link">
          Workshops
        </Link>
        <Link to="/Registration" className="navbar-link">
          Registration
        </Link>
        <Link to="/Contact" className="navbar-link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
