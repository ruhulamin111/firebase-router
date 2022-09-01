import React from 'react';
import { NavLink } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';


const Header = () => {
    const { user, handleSignOut } = useFirebase();
    const active = ({ isActive }) => {
        return {
            color: isActive ? 'green' : '',
        }
    }

    return (
        <div className='w-3/4 mx-auto my-5 '>
            <nav className='text-center'>
                <NavLink className='mx-3 font-semibold text-lg' style={active} to='/home'>Home</NavLink>
                <NavLink className='mx-3 font-semibold text-lg' style={active} to='/shop' > Shop</NavLink >
                <span className='font-semibold text-lg'>{user?.uid && user?.displayName}</span>
                {user?.uid ? <button onClick={handleSignOut} className='mx-3 font-semibold text-lg border px-3 py-1 border-green-400 rounded-full'>Sign Out</button> : <>
                    <NavLink className='mx-3 font-semibold text-lg' style={active} to='/signIn'>Sign In</NavLink>
                    <NavLink className='mx-3 font-semibold text-lg' style={active} to='/signUp'>Sign Up</NavLink></>}
            </nav>
        </div >
    );
};

export default Header;