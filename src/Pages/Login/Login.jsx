import React from 'react'
import tImg from "../../assets/images/tLogin.png"
import stImg from "../../assets/images/stLogin.png"
import LoginForm from './LoginForm'
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
function Login() {
    const state = useLocation().state;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: "2"
            }}
            className=' w-full  bg-white'>
            <div className=' flex flex-wrap justify-between'>
                <div

                    className=" w-full flex items-center justify-center md:w-48 left py-2 md:py-24 text-center bg-slate-300 text-white">

                    <img
                        className='w-full h-72' src={state === "studentLogin" ? stImg : tImg} alt="" />

                </div>
                <div className=" w-full md:w-48  py-24">
                    <h1 className='h1 border-bottom text-center text-slate-800 text-3xl'>
                        {
                            state === "studentLogin" ? "Student" : "Teachers"
                        }
                    </h1>
                    <LoginForm />
                </div>
            </div>

        </motion.div>
    )
}

export default Login