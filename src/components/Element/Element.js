import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './element.scss';

class Element extends Component {
  render() {
    const path = this.props.match.path;

    const handleClick = (id) => {
      this.props.history.push(path + '/' + id);
    }
    const items = this.props.items;
    const itemList = items.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <button
            onClick={() => handleClick(item.id)}
            className='element'>
            {item.name}
          </button>
        </React.Fragment>
      )
    })
    return (
      <React.Fragment>
        {itemList}
      </React.Fragment >
    )
  }
}


export default withRouter(Element);