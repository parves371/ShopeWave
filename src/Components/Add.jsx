import React from 'react';

import Img from './Layouts/Img';
import add1 from '../assets/Ad_1.png'
import add2 from '../assets/Ad_2.png'
import add3 from '../assets/Ad_3.png'
import Container from './Layouts/Container';
import Flex from './Layouts/Flex';

const Add = () => {
  return (
    <section className='cd:mt-[174px] mt-4'>
      <Container>
        <Flex className={'justify-between'}>
        <Img src={add1} imgClassName={'cd:w-[780px]'} />
          <div className='ml-1 '>
        <Img src={add2} imgClassName={'cd:w-[784px]'}/>
        <Img src={add3} imgClassName={'cd:w-[785px] cd:mt-9 mt-2 sm:mt-4 ip:mt-6' }/>
            </div>          
        </Flex>
      </Container>
    </section>
  )
}

export default Add