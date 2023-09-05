import React, { useState } from 'react'
import { useLocation } from 'react-router-dom' 
import Checkbox from '../../Components/Checkbox/Checkbox';

function LoginForm() {
    const state = useLocation().state;
    const [isSignUp, setIsSignUp] = useState(false)
    return (
        <>
        
            { isSignUp ? <div className="w-full">
                <div className="text-xl text-center">Login</div>
                <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8">
                    
                    <div className="mb-1">
                        <label className="lable" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow input " id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                        <label className="lable" htmlFor="password">
                            Password
                        </label>
                        <input className="input shadow" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between flex-col">
                        <button className="myBtn w-full" type="button">
                            Sign In
                        </button>
                        <br />
                        <a className="hidden align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>

                        <p className="  align-baseline font-bold text-sm">
                            Don't have an account ? <button
                              onClick={()=> setIsSignUp(!isSignUp)}
                            className='text-blue-700 font-bold' href='#'>Register Now</button>
                        </p>
                    </div>
                </form>

            </div>
                :



                <div className="w-full">
                     <div className="h1 text-center">Resgister</div>
                    <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8">
                        <div className="mb-1">
                            <label className="lable" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow input " id="username" type="text" placeholder="Your Good Name" />
                        </div>
                        <div className="mb-1">
                            <label className="lable" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow input " id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label className="lable" htmlFor="password">
                                Password
                            </label>
                            <input className="input shadow" id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div>
                            <Checkbox/>
                            <button className="myBtn mt-4 w-full" type="button">
                                Sign In
                            </button> 
                        </div>

                        <p className=" mt-3  align-baseline font-bold text-sm">
                            I have Allready an account ? <button
                              onClick={()=> setIsSignUp(!isSignUp)}
                            className='text-blue-700 font-bold'>Sign in Now</button>
                        </p>
                    </form>

                </div>


            }

        </>

    )
}

export default LoginForm