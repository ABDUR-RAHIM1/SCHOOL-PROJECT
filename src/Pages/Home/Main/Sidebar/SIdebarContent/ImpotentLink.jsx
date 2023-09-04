import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
function ImpotentLink() {
    const info = [
        {
            text: "গণপ্রজাতন্ত্রী বাংলাদেশ সরকার",
            link: "https://bangladesh.gov.bd/index.php"
        },
        {
            text: "শিক্ষা মন্ত্রণালয়",
            link: "https://www.moedu.gov.bd/"
        },
        {
            text: " ডাক ও টেলিযোগাযোগ বিভাগ",
            link: "https://bangladesh.gov.bd/index.php"
        },
        {
            text: "শিক্ষা বোর্ড,  দিনাজপুর ",
            link: "https://dinajpureducationboard.gov.bd/"
        },
        {
            text: "কারিগরি শিক্ষা অধিদপ্তর",
            link: "https://www.bteb.gov.bd/www.techedu.gov.bd"
        },

    ]
    return (
        <>
            <h1 className='heading'>গুরুর্তপূর্ন লিঙ্ক সমূহ</h1>
            <div className='my-2  py-2 border-1 border-dotted border-slate-300'>
                {
                    info.map((info, index) => (
                        <a className=' mt-2 text-green-600 hover:text-green-700 underline flex gap-2 items-center text-sm' key={index} target='_blank' rel='noreferrer'  href={info.link}>
                            <BsArrowLeftShort />
                            {info.text}
                        </a>
                    ))
                }
            </div>
        </>
    )
}

export default ImpotentLink