'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import brandLogo from '@/assets/logo.png'
import { CancelIcon, MenuIcon, SearchIcon, ShoppingIcon, UserIcon } from '@/assets/icons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    // bg-[#F5F3FF]

    return (
        <div className='bg-[#F5F3FF] sticky  top-0 z-50'>
            <header className=" max-w-screen-xl mx-auto">
                <div className="container mx-auto flex items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button onClick={toggleMenu} className="lg:hidden mr-4">
                            <MenuIcon />
                        </button>
                        <Link href="/">
                            <Image src={brandLogo} alt="Logo" width={150} height={40} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-[#646464] font-semibold hover:text-[#581FC1] ">Home</Link>
                        <Link href="/#shop" className="text-[#646464] font-semibold hover:text-[#581FC1] ">Shop</Link>
                        <Link href="/#deals" className="text-[#646464] font-semibold hover:text-[#581FC1] ">Deals</Link>
                        <Link href="/#new" className="text-[#646464] font-semibold hover:text-[#581FC1] "> What<span>'</span>s New</Link>
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <div className="relative lg:flex items-center border rounded-full px-2 py-1 bg-white">
                            <SearchIcon className='text-black' />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="hidden lg:block ml-2 outline-none bg-transparent text-sm text-black"
                            />
                        </div>
                        <div className='relative'>
                            <ShoppingIcon />

                            <span
                                className="bg-[#1E1E1E] text-[12px] p-1  min-w-[16px] font-sans  h-4 flex items-center justify-center text-white rounded-full absolute -top-2 left-[60%]">0</span>
                        </div>
                        <div>
                            <UserIcon />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'}    max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
                        <button id="toggleClose" onClick={toggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full  p-3'>
                            <CancelIcon />
                        </button>

                        <ul
                            className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li className='mb-6 hidden max-lg:block'>
                                <Link href="/">
                                    <Image
                                        src={brandLogo}
                                        alt="logo"
                                        width={160}
                                        height={40}
                                    />
                                </Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'>
                                <Link href='/'
                                    className='hover:text-blue-600 text-[15px] font-bold text-blue-600 block'>Home</Link>
                            </li>

                            <li className='max-lg:border-b max-lg:py-3'><Link href='#'
                                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Shop</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'><Link href='#'
                                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Deals</Link>
                            </li>
                            <li className='max-lg:border-b max-lg:py-3'><Link href='#'
                                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>What’s New</Link>
                            </li>
                        </ul>
                    </div>

                )}



            </header>

        </div>
    );
};

export default Navbar;