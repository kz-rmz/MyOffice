import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PayHistory from './PayHistory/PayHistory';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='categories__links'>
          <NavLink to='/profile/' exact activeClassName="active">Профиль</NavLink>
          <NavLink to='/profile/payhistory' activeClassName="active">История оплаты</NavLink>
        </div>
        <div className='categories__elements'>
          <Switch>
            <Route exact path='/profile/' component={ProfileInfo} />
            <Route path='/profile/payhistory' component={PayHistory} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default Profile;