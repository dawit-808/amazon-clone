import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/icons/amazonIcon.png";
import usFlag from "../../assets/icons/usFlag.png";
import { MdLocationPin } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <div className={classes.header_container}>
        {/* Logo and Location */}
        <div className={classes.left}>
          <a href="/" className={classes.hoverBox}>
            <img src={logo} alt="Amazon Logo" className={classes.logo} />
          </a>
          <div className={`${classes.location} ${classes.hoverBox}`}>
            <MdLocationPin size={20} />
            <div>
              <p>Deliver to</p>
              <strong>Ethiopia</strong>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={classes.search}>
          <select>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="books">Books</option>
            <option value="fashion">Fashion</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button className={classes.searchButton}>
            <IoMdSearch size={20} />
          </button>
        </div>

        {/* Right Section */}
        <div className={classes.right}>
          <div className={`${classes.language} ${classes.hoverBox}`}>
            <img src={usFlag} alt="Flag" />
            <select>
              <option>EN</option>
            </select>
          </div>

          <div className={`${classes.option} ${classes.hoverBox}`}>
            <p>Hello, sign in</p>
            <strong>Account & Lists</strong>
          </div>

          <div className={`${classes.option} ${classes.hoverBox}`}>
            <p>Returns</p>
            <strong>& Orders</strong>
          </div>

          <div className={`${classes.cart} ${classes.hoverBox}`}>
            <FiShoppingCart size={28} />
            <span>0</span>
          </div>
        </div>
      </div>
      <LowerHeader />
    </>
  );
}

export default Header;
