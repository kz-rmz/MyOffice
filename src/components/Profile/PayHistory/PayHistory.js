import React, { Component } from 'react';
import { connect } from 'react-redux';
import './payhistory.scss';

class PayHistory extends Component {
  render() {
    const history = this.props.state;
    const historyList = history.map(item => {
      return (
        <div className="profile__history" key={item.id}>
          <h3 className="profile__history-item size">{item.date}</h3>
          <h3 className="profile__history-item size">{item.expirationDate}</h3>
          <h3 className="profile__history-item size">{item.amount}</h3>
          <h3 className="profile__history-item size">{item.isPaid ? "Оплачено" : "Не оплачено"}</h3>
        </div>
      )
    })
    return (
      <React.Fragment>
        <div id="payhistory">
          <div className="profile__history-title profile__history">
            <h3 className="profle__history-title-item size">Дата</h3>
            <h3 className="profle__history-title-item size">Период</h3>
            <h3 className="profle__history-title-item size">Сумма</h3>
            <h3 className="profle__history-title-item size">Статус</h3>
          </div>
          {historyList}
        </div>

      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.payHistory
  }
}

export default connect(mapStateToProps)(PayHistory);