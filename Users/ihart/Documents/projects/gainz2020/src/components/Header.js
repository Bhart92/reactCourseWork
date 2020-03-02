import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = () => (
    <div>
        <div><h1><Link to='dashboard'>Gainz</Link></h1></div>
        <div><ul>
                <li>
                    <NavLink exact={true} to='saved'>Saved Workouts</NavLink>
                </li>
             </ul>
          </div>
    </div>
);


export default Header;
