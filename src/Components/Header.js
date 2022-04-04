import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../logo.png'
import Open from '../bars-solid.svg'
import Close from '../xmark-solid.svg'

const Header = () => {
    const [menu,setMenu] = useState(['h-0','h-auto',Open])

    const closeMenu = ()=> {
        menu[2]===Open?setMenu(['h-60','h-screen',Close]):setMenu(['h-0','h-auto',Open]);
    }

    return (
        <div className={`${menu[1]} shadow-md fixed top-0 left-0 right-0 z-50 bg-black/10 sm:bg-white`}>
            <section className={`duration-500 container mx-auto flex justify-between sm:items-center p-3 sm:p-1 sm:px-8 bg-white`}>
                <img className='sm:hidden w-10 h-10 active:scale-90 transition cursor-pointer' src={menu[2]} alt="" onClick={closeMenu} />
                <img className='hidden w-14 h-14 transition sm:block' src={Logo} alt="" onClick={closeMenu} />
                <nav className={`${menu[0]} transition-[height] overflow-hidden duration-300 grow px-2 flex flex-col gap-5 justify-start items-end sm:flex-row sm:justify-center sm:items-center sm:px-0 sm:grow-0 sm:h-8 sm:overflow-visible sm:transition-none`}>
                    <NavLink to='/home' scro className={(navInfo)=> navInfo.isActive?'nav-link-active':'nav-link'}>Home</NavLink>
                    <NavLink to='/reviews' className={(navInfo)=> navInfo.isActive?'nav-link-active':'nav-link'}>Reviews</NavLink>
                    <NavLink to='/dashboard' className={(navInfo)=> navInfo.isActive?'nav-link-active':'nav-link'}>Dashboard</NavLink>
                    <NavLink to='/blogs' className={(navInfo)=> navInfo.isActive?'nav-link-active':'nav-link'}>Blogs</NavLink>
                    <NavLink to='/about' className={(navInfo)=> navInfo.isActive?'nav-link-active':'nav-link'}>About</NavLink>
                </nav>
            </section>
        </div>
    );
};

export default Header;