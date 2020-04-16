import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './changepass.scss'

function Changepass() {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector('.pass-cancel').style.display = 'none';
    const submit = document.querySelectorAll('.close-pass');
    submit.forEach((element) => {
      element.style.display = "block";
    })
  }
  return (
    <React.Fragment>
      <div className='categories__links'>
        <NavLink to='/changepassword/' exact activeClassName="active">Изменить пароль</NavLink>
        <NavLink to='#' className="hidden"></NavLink>
      </div>
      <div className='categories__elements' onSubmit={handleSubmit}>
        <form className="changepass__form">
          <fieldset>
            <input id="oldpass" placeholder="Старый пароль" type="password" className="changepass__input" />
            <input placeholder="Новый пароль" type="password" className="changepass__input" />
            <input placeholder="Подтвердите новый пароль" type="password" className="changepass__input" />
            <input type="submit" value="Сохранить" className="submit-btn" />
          </fieldset>
        </form>
        <Link to="/" className="pass-cancel">Отменить</Link>
        <div className="close-pass">
          <p>Пароль установлен</p>
        </div>
        <Link to="/" className="pass-cancel close-pass">Закрыть</Link>
      </div>
    </React.Fragment>
  )
}

export default Changepass;
