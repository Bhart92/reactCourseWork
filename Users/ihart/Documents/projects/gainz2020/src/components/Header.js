import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = () => (
    <header className='header'>
        <div><h1 className='header--h1'><Link to='dashboard'>Gainz</Link></h1></div>
        <div><ul>
                <li>
                    <NavLink exact={true} to='saved'>Saved Workouts</NavLink>
                </li>
             </ul>
          </div>
    </header>
);


export default Header;
