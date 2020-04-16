import React from 'react';
import { Link } from 'react-router-dom';
import ItemHistory from './ItemHistory';
import Comment from './Comment';

import './history.scss';

function History() {
  return (
    <React.Fragment>
      <div className='categories__links'>
        <Link to='/history' id='history__link'>История</Link>
        <Link to=''></Link>
      </div>
      <div className='categories__elements'>
        <div className="history">

          <div className="history__title">
            <h4 className="history__title-item">№</h4>
            <h4 className="history__title-item">Дата</h4>
            <h4 className="history__title-item">Исполнитель</h4>
            <h4 className="history__title-item">Статус</h4>
          </div>

          <ItemHistory />

        </div>
        <Comment />
        <div className='categories__back'>
          <Link to='/'>Назад</Link>
        </div>
      </div>
    </React.Fragment >

  )
}

export default History;