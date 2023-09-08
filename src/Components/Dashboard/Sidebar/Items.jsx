import React, { useContext } from 'react'
import { globalState } from '../../../States/GlobalState'

function Items(props) {
   
    const { item, icon } = props.item
    const {show , itemText ,setItemText } = useContext(globalState)
    const handleItemsClick = (e) => {
        const text = (e.target.innerText)
        setItemText(text)
    } 
    console.log(itemText)
    return (
        <div title={item} onClick={handleItemsClick} className='flex mt-2 py-2 px-1 hover:bg-slate-600 items-center gap-2 cursor-pointer'>
            <span className='text-2xl pl-2'>{icon}</span>
            <span className={`text-sm uppercase duration-300 ${!show && "hidden"}`}>{item}</span>
        </div>
    )
}

export default Items