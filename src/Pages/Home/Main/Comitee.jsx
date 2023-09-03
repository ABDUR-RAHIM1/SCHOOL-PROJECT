import React from 'react'
import { Link } from 'react-router-dom'

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
                    <thead className='w-full'>
                        <tr>
                            <th> নাম</th>
                            <th> অবস্থান</th>
                            <th> পদবী</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comitee.map((cm, index) => (
                                <tr key={index}>
                                    <td className='text-sm'>{cm.name}</td>
                                    <td className='text-sm'>{cm.title}</td>
                                    <td className='text-sm'>{cm.category}</td>
                                    <td className='text-sm'></td>
                                </tr>
                            ))
                        }
                    </tbody>
                  
                </table>
                <div className='text-right mt-4 w-full'>
                        <button className='myBtn'>
                            আরো দেখুন
                        </button>
                    </div>
            </div>
        </>
    )
}

export default Comitee