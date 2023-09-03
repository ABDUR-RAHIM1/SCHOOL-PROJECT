import React from 'react'
import './Header.css'
import Banner from './Banner'
import News from './News'  
import NavItem from './NavItem'
function Header() {
    return (
        <div>
             <Banner/>
             <News/> 
             <NavItem/>
        </div>
    )
}

export default Header