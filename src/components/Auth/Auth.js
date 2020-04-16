import React from 'react';
import { Link } from 'react-router-dom';
import './auth.scss';

function Auth() {
  // const clickHandle = (e) => {
  //   e.preventDefault();
  //   this.props.history.push('/');
  // }
  return (
    <div className="login__wrap">
      <div className="login">
        <div className="login__logo">
          <h1>MyOffice</h1>
        </div>
        <div className="login__content">
          <h3>Авторизуйтесь</h3>
          <form action="index.html" className="login__form">
            <input id="GET-name" placeholder="Мобильный номер" type="email" className="login__input"></input>
            <input id="GET-name" placeholder="Пароль" type="password" className="login__input"></input>
            {/* <input defaultValue="Войти" className="submit-btn"></input> */}
            <Link to="/" id="submit-btn">Войти</Link>
            <Link to="#">Забыли пароль</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth;
