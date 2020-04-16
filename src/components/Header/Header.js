import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='header__container'>
          <div className='header__logo'>
            <Link to='/'>
              <h1>MyOffice</h1>
            </Link>
          </div>
          <div className='.header__hamburger-menu'>
            <input id='menu__toggle' type='checkbox'></input>
            <label htmlFor='menu__toggle' className='menu__icon'>
              <span className='menu_btn'></span>
              <span className='menu_btn'></span>
              <span className='menu_btn'></span>
            </label>
            <ul className='header-menu__dropdown'>
              <li className='menu-item'><Link to="/history">История</Link></li>
              <li className='menu-item'><Link to="/changepassword">Пароль</Link></li>
              <li className='menu-item'><Link to="/login">Выйти</Link></li>
              <li className='menu-item'><Link to="/profile">Профиль</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;