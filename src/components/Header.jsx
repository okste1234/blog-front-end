import React from 'react'
import { images } from '../constants'

const navName = [
    { name: "Home" },
    { name: "Articles" },
    { name: "Pages" },
    { name: "FAQ" },
    { name: "Pricing" },

]

const NavItem = ({ name }) => {
    return (
        <li className='relative group'>
            <a href='/' className='px-4 py-2'>{name}</a>
            <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:opacity-100 group-hover:right-[90%]'>/</span>
        </li>
    )
}
const Header = () => {
    return (
        <header className='container mx-auto py-4 px-5 flex justify-between items-center'>
            <section>
                <img src={images.Logo} alt='logo' />
            </section>
            <section className='flex gap-x-9 items-center'>
                <ul className='flex gap-x-2 font-semibold'>
                    {navName.map(item => {
                        return <NavItem key={item.name} name={item.name} />
                    })}

                </ul>
                <button className='border-blue-500 border-2 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white text-blue-500 transition-all duration-500'>Sign in</button>
            </section>
        </header>
    )
}

export default Header