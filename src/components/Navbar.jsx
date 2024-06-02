import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { FaShoppingCart } from "react-icons/fa"
const Navbar = () => {
  return (
    <div className="navbar_container">
      <NavLink to="/">
        <div>
          <img src="" alt="" />
        </div>
      </NavLink>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart />
        </NavLink>
      </div>

    </div>
  )
}

export default Navbar