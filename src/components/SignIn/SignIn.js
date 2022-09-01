import React from 'react';
import useFirebase from "../../hooks/useFirebase";


const SignIn = () => {
    const { googleSignIn } = useFirebase();

    return (
        <div>
            <div className='w-4/12 mx-auto'>
                <h2 className='my-5 text-xl font-bold text-green-600'>Please Sign Up</h2>
                <form className='w-3/4'>
                    <label htmlFor="">Name</label>
                    <input className='rounded border-2 border-black p-2 w-full my-2' type="text" placeholder='name' />
                    <br />
                    <label htmlFor="">Email</label>
                    <input className='rounded border-2 border-black p-2 w-full my-2' type="email" placeholder='email' />
                    <br />
                    <label htmlFor="">Password</label>
                    <input className='rounded border-2 border-black p-2 w-full my-2' type="password" placeholder='password' />
                    <br />
                    <input className='text-white cursor-pointer rounded-full  border-2 border-green-400 bg-green-400 p-2 w-full my-2' type="submit" value="Login" />
                </form>
                <div className='w-3/4'>
                    <button onClick={googleSignIn} className='cursor-pointer border-2 border-green-400 rounded-full p-2 w-full my-2'>Google Sign In</button>


                </div>
            </div>


        </div>
    );
};

export default SignIn;