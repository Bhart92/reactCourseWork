import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <div>
        <div><h1>Gainz</h1></div>
        <div><ul>
                <li>
                    <NavLink exact={true} to='saved'>Saved Workouts</NavLink>
                </li>
             </ul>
          </div>
    </div>
);


export default Header;
