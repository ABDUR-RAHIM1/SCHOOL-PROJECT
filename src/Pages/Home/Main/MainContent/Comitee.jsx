import React from 'react' 
import {motion} from "framer-motion"
function Comitee() {
    const comitee = [
        {
            name: "জনাব মোঃ খসরুল আলম",
            title: "প্রতিষ্ঠাতা",
            category: "সভাপতি"
        },
        {
            name: "জনাব জাহাঙ্গীর আলম",
            title: "দাতা সদস্য",
            category: "সদস্য"
        },
        {
            name: "জনাব মোঃ জাকির হোসেন",
            title: "অভিভাবক সদস্য",
            category: "সদস্য"
        },
        {
            name: "জনাব এস এম কামাল হোসেন",
            title: "অভিভাবক সদস্য",
            category: "সদস্য"
        },
    ]
    return (
        <>
            <h1 className='heading'>বর্তমান কমিটির তালিকা</h1>
            <div className='shadowStyle'>
                <table className='mt-4 table table-responsive overflow-auto'>
                    <motion.thead
                          initial={{y : 50}}
                          whileInView={{y : 0}}
                          transition={{
                              duration :"0.5"
                          }}
                    className='w-full'>
                        <tr>
                            <th> নাম</th>
                            <th> অবস্থান</th>
                            <th> পদবী</th>
                        </tr>
                    </motion.thead>
                    <tbody>
                        {
                            comitee.map((cm, index) => (
                                <motion.tr
                                initial={{  y : -50 , opacity : 0 }}
                                whileInView={{ y : 0 , opacity : 1 }}
                                transition={{
                                    duration: "0.5"
                                }}
                                key={index}>
                                    <td className='text-sm'>{cm.name}</td>
                                    <td className='text-sm'>{cm.title}</td>
                                    <td className='text-sm'>{cm.category}</td>
                                    <td className='text-sm'></td>
                                </motion.tr>
                            ))
                        }
                    </tbody>
                  
                </table>
                <div className='text-right mt-4 w-full'>
                        <motion.button
                         initial={{x : 100 , opacity :0}}
                         whileInView={{x : 0 , opacity :1}}
                         transition={{
                            duration:"0.5"
                         }}
                        className='myBtn'>
                            আরো দেখুন
                        </motion.button>
                    </div>
            </div>
        </>
    )
}

export default Comitee