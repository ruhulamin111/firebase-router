import React from 'react';
import { NavLink } from "react-router-dom";


const Header = () => {
    const active = ({ isActive }) => {
        return {
            color: isActive ? 'green' : '',
        }
    }

    return (
        <div className='w-1/4 mx-auto my-5 '>
            <nav className='text-center'>
                <NavLink className='mx-3 font-semibold text-lg' style={active} to='/home'>Home</NavLink>
                <NavLink className='mx-3 font-semibold text-lg' style={active} to='/shop' > Shop</NavLink >
                <NavLink className='mx-3 font-semibold text-lg' style={active} to='/signIn'>Sign In</NavLink>
                <NavLink className='mx-3 font-semibold text-lg' style={active} to='/signUp'>Sign Up</NavLink>
            </nav>
        </div >
    );
};

export default Header;