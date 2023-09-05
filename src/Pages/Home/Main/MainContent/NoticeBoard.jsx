import React from 'react'
import { AiOutlineDownload } from "react-icons/ai"
import {motion} from "framer-motion"
function NoticeBoard() {

    const notice = [
        {
            date: '08-10-2022',
            title: "১ লা মে",
            link: "https://google.com"
        },
        {
            date: '22-.03-2022',
            title: "৮ম শ্রেনির মাসিক মেগা টেস্ট পরীক্ষার ফলাফল সেপ্টেম্বর মাস",
            link: "https://google.com"
        },
        {
            date: '08-10-2022',
            title: "৮ম শ্রেনির মাসিক মেগা টেস্ট পরীক্ষার ফলাফল সেপ্টেম্বর মাস",
            link: "https://google.com"
        },
    ]
    return (
        <>
            <h1 className='heading'>নোটিশ বোর্ড</h1>
            <div className='shadowStyle'>
                <table className='table overflow-auto  table-striped table-auto mt-2'>
                    <motion.thead
                     initial={{y : 50}}
                     whileInView={{y : 0}}
                     transition={{
                         duration :"0.5"
                     }}
                    >
                        <tr>
                            <th>নং</th>
                            <th>তারিখ</th>
                            <th>শিরোনাম</th>
                            <th>ডাউনলোড </th>
                        </tr>
                    </motion.thead>
                    <tbody>
                        {
                            notice.map((notice, index) => {
                                return (
                                    <motion.tr
                                    initial={{  y : -50 , opacity : 0 }}
                                    whileInView={{ y : 0 , opacity : 1 }}
                                    transition={{
                                        duration: "0.5"
                                    }}
                                    key={index}>
                                        <td scope='col'>{index + 1}</td>
                                        <td scope='col'>{notice.date}</td>
                                        <td className='text-sm' scope='col'>{notice.title}</td>
                                        <td scope='col'><a className="flex gap-2 items-center font-semibold text-blue-500 hover:text-blue-600" target='_blank' href={notice.link}><AiOutlineDownload />Download</a></td>
                                    </motion.tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='text-right mt-3'>
                    <motion.button
                        initial={{x : 100 , opacity :0}}
                        whileInView={{x : 0 , opacity :1}}
                        transition={{
                           duration:"0.5"
                        }}
                    className='myBtn'>আরো  দেখুন </motion.button>
                </div>
            </div>
        </>

    )
}

export default NoticeBoard