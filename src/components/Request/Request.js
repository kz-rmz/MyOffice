import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './request.scss';

class Request extends Component {
  render() {
    const { content } = this.props.worker
    const formElement = content;

    let formList = formElement.map((elem, idx) => {
      return (
        <React.Fragment key={idx}>
          <input type="radio" name="options" id={idx} className="radioBtn"></input>
          <label className="request-list__element" htmlFor={idx}>{elem}</label>
        </React.Fragment>
      )
    })

    const requestDescriptionHandler = () => {
      document.getElementById('request__description').style.display = 'block';
    }
    const submitHandler = () => {
      document.querySelector('.request-message').style.display = 'block';
      document.querySelector('.submit-btn').style.display = 'none';
      document.getElementsByTagName('fieldset')[0].disabled = true;
    }
    return (
      <div className='categories__elements'>
        <form id='request__form'>
          <fieldset>
            {formList}
            <input type="radio" name="options" id="option4" className="radioBtn" onChange={requestDescriptionHandler}></input>
            <label className="request-list__element" htmlFor="option4" >Другое</label>
          </fieldset>

          <textarea name="options" rows="10" id="request__description" htmlFor="option4"></textarea>
          <div className='request-message'>
            <h3>Заявка принята!</h3>
            <p>Статаус вашей заявки можно посмотреть в <Link to="/history"> Истории </Link></p>
            <Link to='/'>Закрыть</Link>
          </div>
          <input type="button" value="Отправить" className="submit-btn" onClick={submitHandler}></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id);

  return {
    worker: state.workers.find(worker => worker.id === id)
  }
}

export default connect(mapStateToProps)(Request);