import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const SignIn = () => {
    const { googleSignIn } = useFirebase();
    const handleSubmit = (event) => {
        event.preventDefault()
        googleSignIn()
    }

    return (
        <div>
            <div className='w-1/4 mx-auto'>
                <h2 className='my-5 text-xl font-bold text-green-600'>Please Sign Up</h2>
                <form onSubmit={handleSubmit} className='w-3/4'>
                    <label htmlFor="">Name</label>
                    <input className='border-2 border-black p-2 w-full my-2' type="text" placeholder='name' />
                    <br />
                    <label htmlFor="">Email</label>
                    <input className='border-2 border-black p-2 w-full my-2' type="email" placeholder='email' />
                    <br />
                    <label htmlFor="">Password</label>
                    <input className='border-2 border-black p-2 w-full my-2' type="password" placeholder='password' />
                    <br />
                    <input className='text-white cursor-pointer bg-green-400 p-2 w-full my-2' type="submit" value="Login" />
                </form>
            </div>


        </div>
    );
};

export default SignIn;