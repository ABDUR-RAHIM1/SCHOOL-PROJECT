import React from 'react'
import Info from './Info'
import img from "../../../../../assets/images/precident.png"
import { motion } from "framer-motion"
function President() {
    const info = [
        {
            name: "মোঃ রফিকুল্লাহ",
            img: img,
            details: `জনপ্রিয় বিশ্বাসের বিপরীতে, Lorem Ipsum কেবল এলোমেলো পাঠ্য নয়। এটি 45 খ্রিস্টপূর্বাব্দের ধ্রুপদী ল্যাটিন সাহিত্যের একটি অংশে শিকড় রয়েছে, এটি 2000 বছরেরও বেশি পুরানো। ভার্জিনিয়ার হ্যাম্পডেন-সিডনি কলেজের একজন ল্যাটিন অধ্যাপক রিচার্ড ম্যাকক্লিনটক লোরেম ইপসাম প্যাসেজ থেকে আরও অস্পষ্ট ল্যাটিন শব্দ কনসেক্টুরের সন্ধান করেছিলেন এবং শাস্ত্রীয় সাহিত্যে এই শব্দের উদ্ধৃতিগুলির মধ্য দিয়ে গিয়ে সন্দেহাতীত উত্সটি আবিষ্কার করেছিলেন। লোরেম ইপসাম 45 খ্রিস্টপূর্বাব্দে লেখা সিসেরোর "ডি ফিনিবাস বোনোরাম এট ম্যালোরাম" (দ্য এক্সট্রিমস অফ গুড অ্যান্ড ইভিল) এর বিভাগ 1.10.32 এবং 1.10.33 থেকে এসেছে। এই বইটি নৈতিকতার তত্ত্বের উপর একটি গ্রন্থ, রেনেসাঁর সময় খুব জনপ্রিয়। Lorem Ipsum এর প্রথম লাইন, "Lorem ipsum dolor sit amet..", 1.10.32 ধারার একটি লাইন থেকে এসেছে। মোঃ রফিকুল্লাহ`,
            contact: [
                {
                    title: "স্কুল সভাপতি",
                    mobile: "01321040273",
                    email: "president@gmail.com"
                }
            ]
        },

    ]
    return (
        <>
            <h1 className='heading text-center'>স্কুল সভাপতি</h1>
            <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{
                    duration: "0.5"
                }}
                className='sidebarItem'>
                {
                    info.map((info, index) => (
                        <Info
                            key={index}
                            info={info}
                        />
                    ))
                }
            </motion.div>
        </>
    )
}

export default President