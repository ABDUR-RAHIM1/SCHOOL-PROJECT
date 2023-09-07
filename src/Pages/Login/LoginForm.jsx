import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Checkbox from '../../Components/Checkbox/Checkbox';
import { globalState } from "../../States/GlobalState"
import { API } from '../../config';
import { useRegister } from '../../Hooks/useRegister';
import Loading from '../../Components/Loading/Loading';
import Message from '../../Components/Message/Message';
function LoginForm() {
    const state = useLocation().state;
    const [isSignUp, setIsSignUp] = useState(true)
    const { loginInfo, setLoginInfo } = useContext(globalState)
    const { isLoading, message, register, info } = useRegister(); 

    //  teachers register inputs changer
    const registerChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value })
    }
    // teacher register handler using costom hooks
    const handleTeachersRegister = (e) => {
        e.preventDefault()
        const api = `${API}/teachers/register`
        register(api, loginInfo);
    }

    //     student register handler using costom hooks
    const handleStudentSubmit = (e) => {
        e.preventDefault()
        const api = `${API}/students/register`
        register(api, loginInfo);
    }


    //  teacher login 
    const handleTecherLogin = (e) => {
        e.preventDefault();
        const api = `${API}/teachers/login`
        register(api, loginInfo)
        if (info.role === "teacher") {
            localStorage.setItem("teacherLogin", JSON.stringify(info))
        }

    }

    //  student login 
    const handleStudnetLogin = (e) => {
        e.preventDefault();
        const api = `${API}/students/login`
        register(api, loginInfo)
        if (info.role === "student") {
            localStorage.setItem("studentLogin", JSON.stringify(info))
        }
    }

    return (
        <>

            {isSignUp ?
                // teachers / students
                <div className="w-full">
                    <div className="text-xl text-center text-blue-600">Login</div>
                    <form onSubmit={state === "studentLogin" ? handleStudnetLogin : handleTecherLogin} className="bg-white shadow-sm rounded px-8 pt-6 pb-8">

                        <div className="mb-1">
                            <label className="lable" htmlFor="email">
                                Email
                            </label>
                            <input onChange={registerChange} name='email' value={loginInfo.email} className="shadow input " id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label className="lable" htmlFor="password">
                                Password
                            </label>
                            <input onChange={registerChange} name='password' value={loginInfo.password} className="input shadow" id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Enter Your a password.</p>
                        </div>
                        <div className="flex items-center justify-between flex-col">
                            <button className="myBtn w-full" type="submit">
                                {
                                    isLoading ? <Loading /> : <span>Sign In</span>
                                }
                            </button>
                            <br />
                            <a className="hidden align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>

                            <p className="  align-baseline font-bold text-sm">
                                Don't have an account ? <button
                                    onClick={() => setIsSignUp(!isSignUp)}
                                    className='text-blue-700 font-bold' href='#'>Register Now</button>
                            </p>
                        </div>
                    </form>

                </div>
                :
                // teachers / students register form
                <div className="w-full">
                    <div className="text-xl text-center text-blue-600">Register </div>
                    <form onSubmit={state === "studentLogin" ? handleStudentSubmit : handleTeachersRegister} className="bg-white shadow-sm rounded px-8 pt-6 pb-8">
                        <div className="mb-1">
                            <label className="lable" htmlFor="username">
                                Username
                            </label>
                            <input onChange={registerChange} value={loginInfo.userName} name='userName' required className="shadow input " id="username" type="text" placeholder="Your Good Name" />
                        </div>
                        <div className="mb-1">
                            <label className="lable" htmlFor="email">
                                Email
                            </label>
                            <input onChange={registerChange} value={loginInfo.email} name='email' required className="shadow input " id="email" type="email" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <label className="lable" htmlFor="password">
                                Password
                            </label>
                            <input onChange={registerChange} value={loginInfo.password} name='password' required className="input shadow" id="password" type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                        </div>
                        <div>
                            <Checkbox />
                            <button className="myBtn mt-4 w-full" type="submit">
                                {
                                    isLoading ? <Loading /> : <span>Register</span>
                                }
                            </button>
                        </div>

                        <p className=" mt-3  align-baseline font-bold text-sm">
                            I have Allready an account ? <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className='text-blue-700 font-bold'>Sign in Now</button>
                        </p>
                    </form>

                </div>
            }

            {
                message && <Message
                    message={message}
                />
            }
        </>

    )
}

export default LoginForm