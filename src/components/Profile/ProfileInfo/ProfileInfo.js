import React, { Component } from 'react';
import { connect } from 'react-redux';
import './profileInfo.scss'

class ProfileInfo extends Component {
  render() {
    const info = this.props.state;
    const id = info[0].id;
    return (
      <React.Fragment>
        <div id="office">
          <div id="building" className="buildingItem">
            <h4>{info[id].building}</h4>
            <p>БЦ "В7"</p>
          </div>
          <div id="buildingDescription" className="buildingItem">
            <div id="room" className="descriptionItem">
              <h4>Кабинет</h4>
              <p>{info[id].room}</p>
            </div>
            <div id="area" className="descriptionItem">
              <h4>Площадь</h4>
              <p>{info[id].space}</p>
            </div>
            <div id="price" className="descriptionItem">
              <h4>Цена</h4>
              <p>{info[id].price}</p>
            </div>
            <div id="total" className="descriptionItem">
              <h4>Сумма</h4>
              <p>{info[id].total()}</p>
            </div>
          </div>
          <div id="buildingInformation" className="buildingItem">
            <div className="informationItem">
              <h4>Наименование</h4>
              <p>{info[id].company}</p>
            </div>
            <div className="informationItem">
              <h4>БИН/ИИН</h4>
              <p>{info[id].bin}</p>
            </div>
            <div className="informationItem">
              <h4>Дата оплаты</h4>
              <p>25.23.2312</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profile
  }
}

export default connect(mapStateToProps)(ProfileInfo);

