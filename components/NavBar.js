"use client";

import Link from 'next/link'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavBar = () => {
    const isUserLoggedIn = true

    const [providers , setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const providers = await getProviders()
            setProviders(providers)
        }
        setProviders()
    }, [])

    return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/logo.svg' alt='Promptopia Logo' width={30} height={30}/>
            <p className='logo_text'>Promptopia</p>
        </Link>

        {/* Desktop navigtion */}
        <div className='sm:flex hidden'>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-prompt' className='black_btn'>Create Post</Link>
                    <button type='button' className='outline_btn' onClick={signOut}>Sign Out</button>
                    <Link href='/profile'>
                        <Image src='/assets/images/logo.svg' alt='Profile' width={37} height={37} className='rounded-full'/>
                    </Link>
                </div>
            ) : (
                <div>
                    {providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                            Sign in with {provider.name}
                        </button>
                        ))}
                </div>
            )}
        </div>

        {/* Mobile navigation */}
        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image src='/assets/images/logo.svg' alt='Profile' width={37} height={37} className='rounded-full' onClick={() => {setToggleDropdown((prev) => !prev)}}/>

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link className='dropdown_link' href='/profile' onClick={() => {setToggleDropdown(false)}}>Profile</Link>
                            <Link className='dropdown_link' href='/create-prompt' onClick={() => {setToggleDropdown(false)}}>Create Post</Link>
                            <button type='button' className='mt-5 w-full black_btn' onClick={() => {setToggleDropdown(false); signOut()}}>Sign Out</button>
                        </div>
                    )}

                </div>
                ) : (
                <div>
                    {providers && Object.values(providers).map((provider) => (
                        <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                            Sign in with {provider.name}
                        </button>
                    ))}
                </div>
                )}
        </div>
            
    </nav>
  )
}

export default NavBar