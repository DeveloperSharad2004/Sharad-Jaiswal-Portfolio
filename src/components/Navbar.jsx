import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
            <div className='cotainer mx-auto flex justify-between items-center'>
                <div>
                    <a href="" className='text-3xl font-bold text-white'>
                        Sharad
                        <span className='text-cyan-400 ml-1.5'>Jaiswal</span>
                        <div className='h-4 w-4 bg-cyan-400 rounded-full'></div>
                    </a>
                </div>
                <div className='hidden md:flex space-x-10'>
                    <a href="#home" className='relative text-white/80 transition duration-300 hover:text-cyan-400 group'>
                        <span>Home</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href="#about" className='relative text-white/80 transition duration-300 hover:text-cyan-400 group'>
                        <span>About</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href="#skills" className='relative text-white/80 transition duration-300 hover:text-cyan-400 group'>
                        <span>Skills</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href="#projects" className='relative text-white/80 transition duration-300 hover:text-cyan-400 group'>
                        <span>Projects</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                    <a href="#contact" className='relative text-white/80 transition duration-300 hover:text-cyan-400 group'>
                        <span>Contact</span>
                        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </div>
                <div className='md:hidden'>
                    {
                        showMenu ?
                            <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> :
                            <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
                    }


                </div>
            </div>

            {/* Mobile Menus  */}
            {
                showMenu && (
                    <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col text-center justify-center items-center gap-6 border border-cyan-400'>
                        <a onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white/80 border border-cyan-400 w-50'>
                            <span>Home</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="#about" className='relative text-white/80 border border-cyan-400 w-50'>
                            <span>About</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="#skills" className='relative text-white/80 border border-cyan-400 w-50'>
                            <span>Skills</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="#projects" className='relative text-white/80 border border-cyan-400 w-50'>
                            <span>Projects</span>
                        </a>
                        <a onClick={() => setShowMenu(!showMenu)} href="#contact" className='relative text-white/80 border border-cyan-400 w-50'>
                            <span>Contact</span>
                        </a>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar
