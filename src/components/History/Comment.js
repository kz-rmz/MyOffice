import React from 'react';
import './history.scss';

export default function Comment() {
  return (
    <div className="history__comment">
      <form id="history__from">
        <h5>Вы довольный качеством обслживания</h5>
        <div className="history__radio">
          <input type="radio" name="radio" id="history__yes" className="history__radio-element" />
          <label htmlFor="history__yes">Да</label>
          <input type="radio" name="radio" id="history__no" className="history__radio-element" />
          <label htmlFor="history__no">Нет</label>
          <input type="radio" name="radio" id="history__desc" className="history__radio-element" />
          <label htmlFor="history__desc">Описание</label>
        </div>
        <div className="history__comment-desc">
          <textarea name="radio" rows="5" cols="40" maxLength="200" placeholder="Ваши комментарии"></textarea>
        </div>
        <input type="submit" className="button" id="history__button" />
      </form>
    </div>
  )
}
