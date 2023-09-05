import React from 'react'
import book from "../../../../assets/images/book.png"
import classImg from "../../../../assets/images/class.png"
import exam from "../../../../assets/images/exam.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
function AcademicInfo() {
    const info = [
        {
            title: "বইএর তালিকা",
            img: book,
            link: "/books"
        },
        {
            title: "ক্লাস রুটিন",
            img: classImg,
            link: "/class-routine"
        },
        {
            title: "পরীক্ষার রুটিন",
            img: exam,
            link: "exam-routine"
        },
    ]
    return (
        <>
            <h1 className='heading'>একাডেমিক তথ্য</h1>
            <motion.div
                initial={{  y : -50 , opacity : 0 }}
                whileInView={{ y : 0 , opacity : 1 }}
                transition={{
                    duration: "0.5"
                }}
                className='flex shadowStyle justify-between flex-wrap'>
                {
                    info.map((info, index) => (
                        <Link className=' w-full md:w-30 bg flex items-center justify-center flex-col rounded-sm py-2 mt-4' to={info.link} key={index}>
                            <img className='w-32' src={info.img} alt="information" />
                            <p className='mt-2 text-green-700'>{info.title}</p>
                        </Link>
                    ))
                }
            </motion.div>
        </>
    )
}

export default AcademicInfo