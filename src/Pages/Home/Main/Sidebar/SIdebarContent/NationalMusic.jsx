import React from 'react'
import music from "../../../../../assets/national_song.mp3"
function NationalMusic() {
    return (
        <>
        <h1 className='heading mt-4'>জাতীয় সংগীত</h1>
        <div className='my-6 sidebarItem'>
            <div className=' border-1 border-dotted border-slate-300 py-3'>
                <audio className='w-full bg-green-700' controls src={music} />
            </div>
        </div>
        </>
        

    )
}

export default NationalMusic