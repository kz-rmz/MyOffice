import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Element from '../Element/Element';

class Categories extends Component {
  render() {
    const path = this.props.match.path;
    return (
      path === '/categories' ?
        (
          <React.Fragment>
            <div className='categories__links'>
              <Link to=''>Выбор запроса</Link>
              <Link to='/history'>История</Link>
            </div>
            <div className='categories__elements'>
              <Element items={this.props.workers} />
              <div className='categories__back'>
                <Link to='/'>Назад</Link>
              </div>
            </div>
          </React.Fragment >
        ) : (
          <React.Fragment>
            <div className='categories__links'>
              <Link to=''>Выбор запроса</Link>
              <Link to='/history'>История</Link>
            </div>
            <div className='categories__elements'>
              <Element items={this.props.docs} />
              <div className='categories__back'>
                <Link to='/'>Назад</Link>
              </div>
            </div>
          </React.Fragment >
        )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    docs: state.docs,
    workers: state.workers
  }
}

export default connect(mapStateToProps)(Categories);