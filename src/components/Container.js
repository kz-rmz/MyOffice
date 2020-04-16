import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { } from 'react-redux'
import './container.scss';
import Main from './Main/Main';
import Categories from './Categories/Categories';
import Request from './Request/Request';
import Profile from './Profile/Profile';
import Download from './Download/Download';
import Changepass from './Changepass/Changepass';
import History from './History/History';


class Container extends Component {
  render() {
    return (
      <div className='categories'>
        <div className='categories__content'>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/docs' component={Categories} />
            <Route path='/docs:id' component={Download} />
            <Route exact path='/categories' component={Categories} />
            <Route path='/categories/:id' component={Request} />
            <Route path='/profile' component={Profile} />
            <Route path='/profile/:category' component={Profile} />
            <Route path='/changepassword' component={Changepass} />
            <Route path='/history' component={History} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Container;