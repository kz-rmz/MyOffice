import React, { Component } from 'react';
import { connect } from 'react-redux';
import './history.scss';

class ItemHistory extends Component {
  render() {
    const items = this.props.state;
    const itemList = items.map((item) => {
      const date = new Date(item.date);
      const fullDate = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
      return (
        <div className='history__content' key={item.id}>
          <p className='history__item'>{item.id}</p>
          <p className='history__item'>{fullDate}</p>
          <p className='history__item'>{item.worker}</p>
          <p className='history__item'>{
            item.isDone ?
              ("Выполнено") : ("Отказ")
          }
          </p>
        </div >
      )
    })
    return (
      <React.Fragment>
        {itemList}
      </React.Fragment >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.history
  }
}

export default connect(mapStateToProps)(ItemHistory);