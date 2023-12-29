import React from 'react'

const Filter = ({children,tittle,handleChange}) => {
  return (
    <div className='font-dm text-base text-[#767676]'>
        <label htmlFor="">{tittle}</label>
        <select name="" id="" className='ml-3 w-[239PX] px-5 py-3 outline-1 outline-black border-2 border-black' onChange={handleChange}>
            {children}
        </select>
    </div>
  )
}

export default Filter