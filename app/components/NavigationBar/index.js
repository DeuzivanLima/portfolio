'use client'
import { Menu, MessageSquareText, BadgeHelp, Settings } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export const NavigationBar = () => {
    const [is_open_menu, setIsOpenMenu] = useState(false)

    return (
        <>
            <nav className='bg-neutral-950 p-6 shadow-md flex justify-between'>
                <h1 className='text-white'>Home</h1>
                <Menu className='text-white z-50' onClick={() => setIsOpenMenu(!is_open_menu)}/>
            </nav>

            <div className={'duration-500 bg-black w-[75%] h-[100%] fixed top-0 text-white pt-[5rem] ' +  (is_open_menu ? 'right-0' : 'right-[-100%]')}>
                <ul>
                    <li>
                        <Link href={'#'} className='flex gap-4 p-4 border-b border-t hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <MessageSquareText/>
                            <span>My Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='flex gap-4 p-4 border-b border-t hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <Settings/>
                            <span>Setting</span>
                        </Link>
                    </li>
                    <li>
                        <Link href={'#'} className='flex gap-4 p-4 border-b border-t hover:bg-neutral-700 hover:animate-pulse border-neutral-500'>
                            <BadgeHelp/>
                            <span>About</span>
                        </Link>
                    </li>
                </ul>

                <footer className='absolute bottom-6 text-center w-full text-neutral-800'>Version: 0.0.1b</footer>
            </div>
        </>
    )
}