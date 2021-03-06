import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import Hamburger from './Hamburger';
import icon from '../../assets/laptop-code-solid.svg';
import './Nav.scoped.css';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const dropdownToggle = () => {
    if (window.innerWidth > 600) return;
    setOpen(!open);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="menu">
          <li className="menu__item">
            <Link to="/projects">
              <img src={icon} className="icon" />
            </Link>
          </li>

          <li className="menu__item">
            <ThemeSwitcher />
          </li>

          <li onClick={() => setOpen(!open)} className="menu__item">
            <Hamburger openState={open} />
          </li>
        </ul>
      </nav>

      <Dropdown hidden={!open}>
        <DropdownItem navToggle={dropdownToggle} name="Home" linkTo="/" />
        <DropdownItem
          navToggle={dropdownToggle}
          name="Projects"
          linkTo="/projects"
        />
        <DropdownItem navToggle={dropdownToggle} name="About" linkTo="/about" />
        <DropdownItem
          navToggle={dropdownToggle}
          name="Contact"
          linkTo="/contact"
        />
      </Dropdown>
    </div>
  );
};

export default Nav;
