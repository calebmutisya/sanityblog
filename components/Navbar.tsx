import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-gray-200 py-[20px]'>
        <nav className='container '>
            <Link href="/"><span className='text-2xl font-fugazone text-blue-500'>MyWiki</span></Link>

        </nav>
    </div>
    
  )
}

export default Navbar
