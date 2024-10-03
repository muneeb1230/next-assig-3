import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  <header className='header'>
    <ul className='navbar'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        <Link href='/contact-us'><li>Contact us</li></Link>
        <Link href='/services'><li>Serviecs</li></Link>
    </ul>
  </header>
  )
}

export default Header

