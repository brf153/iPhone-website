import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

function Navbar() {
  return (
    <div className="p-[20px] flex items-center justify-between">
        <img src={appleImg} alt="Apple Logo" className="w-8 h-8" />
        <div className='flex gap-4 max-sm:hidden'>

        {
            navLists.map((item, index) => (
                <span key={index} className="text-white text-lg font-semibold mx-4">
                    {item}
                </span>
            ))
        }
        </div>
        <div className='flex items-center gap-4'>
            <img src={searchImg} alt="Search Icon" className="w-4 h-4" />
            <img src={bagImg} alt="Bag Icon" className="w-4 h-4" />
        </div>
    </div>
  )
}

export default Navbar