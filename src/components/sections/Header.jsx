import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import userImage from '../../assets/img/user.png'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container elements">
          <Link to='/'>
            <img src={logo} alt="logo" width='150px' />
          </Link>
          <div>
            <ul className="menu menu--header">
              <li>Item1</li>
              <li>Item1</li>
              <li>Item1</li>
              <li>Item1</li>
              <li>Item1</li>
            </ul>
          </div>
          <div className="user">
            <img src={userImage} alt="user" className="user__img" />
            <h3 className="user__name">Rudy Mendoza</h3>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;