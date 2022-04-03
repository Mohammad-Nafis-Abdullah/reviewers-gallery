import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <section className='container mx-auto'>
                <nav className='flex justify-center items-center gap-8 h-20 shadow-md '>
                    <NavLink to='/home' className={(navInfo)=> navInfo.isActive?'nav-link-active':'nav-link'}>Home</NavLink>
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