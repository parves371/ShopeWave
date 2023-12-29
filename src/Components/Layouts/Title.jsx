import React from 'react';

const Title = ({title,className}) => {
  return (
    <h2 className={`${className} cd:text-[39px] lg:text-[33px] md-text-[30px] lg:mt-9 text-2xl ml-2 lg:mb-12 font-bold font-dm capitalize]`}>{title}</h2>
  )
}

export default Title