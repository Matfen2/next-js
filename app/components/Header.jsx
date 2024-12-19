"use client"

import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import nextJsLogo from '../../public/nextJs.png'

const link = [
  { href: "#about-section", name: "About" },
  { href: "#technic-section", name: "Technics" },
  { href: "#contact-section", name: "Contact" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function showActive (value) {
    setIsActive(value)
  };

  return (
    <header className='p-7 rounded-lg flex flex-col justify-between items-center md:flex-row'>
      <Link href={'/'}><Image src={nextJsLogo} className='cursor-pointer' alt='next-js-logo' loading='lazy' width={70} height={90} /></Link>
      <nav className='flex flex-col md:flex-row gap-10 text-center mt-6 md:gap-4 md:mt-0'>
        {link.map((lin) => (
          <Link key={lin.href} href={lin.href} className={`${isActive === lin.href ? "underline font-semibold" : "" } text-xl italic cursor-pointer text-zinc-50`} onClick={() => showActive(lin.name)} aria-current={isActive === lin.href ? page : undefined}>
            {lin.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header