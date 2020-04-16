import React, { Component } from 'react';
import Header from './Header/Header';
import Container from './Container';

class Layer extends Component {
  render() {
    return (
      <div className='wrap'>
        <Header />
        <Container />
      </div>
    )
  }
}

export default Layer;