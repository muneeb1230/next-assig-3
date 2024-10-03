import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer">
        <ul className='fot'>

        <Link href=""><li>facebook</li></Link>
        <Link href= "/portfolio"><li>Portfolio</li></Link>
        </ul>
      
    </div>
  )
}

export default Footer