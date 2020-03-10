import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className='header'>
  <div><h1 className='header--h1'><Link className="header__title" to="/dashboard">
    <h1>Gainz</h1>
  </Link></h1>
  </div>
  
  <div><ul>
          <li>
              <NavLink exact={true} to='saved'>Saved Workouts</NavLink>
          </li>
          <button className="button button--link" onClick={startLogout}>Logout</button>
       </ul>
    </div>
</header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

