import React from 'react'

const Inpute = ({className,label,type,placeholder}) => {
  return (
    <div className={`font-dm ${className}`}>
        <label htmlFor="" className='text-base text-[#262626] font-bold block'>{label}</label>
        <input type={type} className='outline-transparent py-5 w-full border-b border-[#F0F0F0] placeholder:text-base placeholder:text-[#767676]' placeholder={placeholder}/>
    </div>
  )
}

export default Inpute