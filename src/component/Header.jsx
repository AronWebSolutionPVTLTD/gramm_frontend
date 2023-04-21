import React, { useState } from "react";
import {TiThMenu} from 'react-icons/ti'
const Header =()=>{
    const [ menuopen ,setMenuOpen ] = useState(false);
    return(
        <header>
            <div className="page-width">
            <div className="navigation-bar flex justify-between items-center py-4">
                <div className="logo-block">
                    <span><img src="/images/logo.png" alt="Main-logo" /> </span>                    
                </div>  
                <div className="menu-bar relative">
                    <span className="flex md:hidden items-center text-3xl text-pink-3 cursor-pointer" onClick={()=>setMenuOpen(!menuopen)}><TiThMenu /></span>
                    <ul className={`block md:flex justify-center items-center gap-8 rounded-lg mt-3.5 text-center text-white dropdown-block absolute top-full right-0 ${menuopen ? 'opacity-1 visible' : ' opacity-0 md:opacity-100 invisible md:visible'} md:px-0 md:py-0 px-4 py-3 bg-white md:bg-transparent min-w-[153px] md:static`}>
                        <li className="py-2 text-sm font-medium"><a href="#">Become a Creator </a></li>
                        <li className="py-2 text-sm font-medium"><a href="#">Sign In</a></li>
                        <li className="py-2 text-sm font-medium"><a href="#" className="btn-primary w-108px h-48px flex justify-center items-center rounded-full">Sign Up</a></li>
                    </ul>
                </div>          
            </div>
            </div>
        </header>
    )
}
export default Header;