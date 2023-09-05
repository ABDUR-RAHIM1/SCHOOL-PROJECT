import React from 'react'
import student from "../../../../assets/images/student.png"
import teacher from "../../../../assets/images/teacher.png"
import comitee from "../../../../assets/images/comitee.png"
import donar from "../../../../assets/images/donar.png"
import labour from "../../../../assets/images/labour.png"
import school from "../../../../assets/images/school.png"
import InstInfo from './InstInfo'
import { motion } from "framer-motion"
function InstituteInfo() {
    const info = [
        { title: "ইনস্টিটিউটের বিবরণ", link: "/instiute", img: school },
        { title: "ছাত্রছাত্রী", link: "/students", img: student },
        { title: "শিক্ষক", link: "/teachers", img: teacher },
        { title: "কমিটি", link: "/comitee", img: comitee },
        { title: "ডোনার সদস্যা", link: "/donars", img: donar },
        { title: "কর্মী ", link: "", img: labour },
    ]
    return (
        <>
            <h1 className='heading'>ইনস্টিটিউট তথ্য</h1>
            <motion.div
               initial = {{opacity :0,  scale: 0.7}}
               whileInView = {{opacity :1,  scale: 1}}
               transition={{
                 duration :"0.5"
               }}
                className='shadowStyle'>

                <div className='flex justify-between flex-wrap'>
                    {
                        info.map((info, index) => (
                            <InstInfo
                                key={index}
                                info={info}
                            />
                        ))
                    }
                </div>
            </motion.div>
        </>

    )
}

export default InstituteInfo