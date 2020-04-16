import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      < div >
        <div className='categories__links'>
          <Link to='' id='activ'>Выбор запроса</Link>
          <Link to='/history'>История</Link>
        </div>
        <div className='categories__elements'>
          <Link to='/docs' className='button'>Документы</Link>
          <Link to='/categories' className='button'>Услуги</Link>
        </div>
      </div >

    )
  }
}

export default Main;