import React, { useEffect, useRef, useState } from 'react';
import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';


import Container from './Layouts/Container';
import Flex from './Layouts/Flex';
import Dropdown from './Layouts/Dropdown';
import List from './Layouts/List';
import ListItem from './Layouts/ListItem';
import Cart from '../assets/Cart.webp';
import Img from './Layouts/Img';
const NavHeader = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const category = useRef();
  const user = useRef();
  const cartRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (category.current.contains(e.target)) {
        setShowCategory(!showCategory);
      } else {
        setShowCategory(false)
      }
      if (user.current.contains(e.target)) {
        setShowUser(!showUser);
      } else {
        setShowUser(false)
      }
      if (cartRef.current.contains(e.target)) {
        setShowCart(!showCart);
      } else {
        setShowCart(false)
      }
    })
  }, [showCategory, showUser, showCart])

  return (
    <section className='bg-[#F5F5F3] py-[25px] px-2'>
      <Container>
        <Flex className={"justify-between items-center"}>
          <Dropdown className={'flex items-center gap-x-3  cd:w-[10%] relative '} refer={category}>
            <HiBars3BottomLeft />
            <p className=' hidden sm:block'>Shop by Category </p>
            {
              showCategory && <List className={"absolute left-0 top-10 font-dm bg-[#262626] w-[263px] text-[#FFFFFFB2] z-10 "}>
                <ListItem listName={"Accesories"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all hover:pl-8"} />
                <ListItem listName={"Furniture"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all hover:pl-8"} />
                <ListItem listName={"Electronics"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all hover:pl-8"} />
                <ListItem listName={"Clothes"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all hover:pl-8"} />
                <ListItem listName={"Bags"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all hover:pl-8"} />
                <ListItem listName={"Home appliances"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all hover:pl-8"} />
              </List>
            }

          </Dropdown>
          <div className='cd:w-[38%] font-dm text-sm'>
            <input type="text" placeholder='Search Products'
              className='cd:w-[600px] ip:w-[550px] sm:w-[350px] py-4 px-5 outline-transparent placeholder:font-dm placeholder:text-sm' />
            <FaSearch className='inline-block sm:ml-[-50px] ml-[-35px] cursor-pointer' />
          </div>
          <Flex className={"cd:gap-x-10  cd:w-[7%] text-xl sm:gap-x-4 gap-x-4 "}>
            <Dropdown className={"flex items-center gap-x-1 relative "} refer={user}>
              <FaUserAlt />
              <GoTriangleDown />
              {
                showUser &&
                <List className={"absolute top-10 right-0 w-[200px] capitalize text-dm z-10"}>
                  <ListItem listName={"my Account"} linkClassName={"block bg-black py-4 text-[#FFFFFF] text-center"} />
                  <ListItem listName={"Log Out"} linkClassName={"block bg-white py-4 text-[#26262] text-center border border-[#F0F0F0] border-solid"} />
                </List>
              }
            </Dropdown>
            <Dropdown className={"relative"} refer={cartRef}>
              <FaShoppingCart />
              {
                showCart &&
                <div className='absolute font-dm top-10 right-0 w-[358px] z-10'>
                  <Flex className={"p-5 bg-[#F5F5F3] items-center justify-between"}>
                    <Img src={Cart} className={"w-20 h-20"} imgClassName={"w-full"} />
                    <div className=' text-sm font-bold'>
                      <h5>Black Smart Watch</h5>
                      <h5 className='mt-3 '>$44.00</h5>
                    </div>
                    <ImCross className='text-lg' />
                  </Flex>
                  <div className='p-5 text-base'>
                    <h6 className='font-normal pb-3'>Subtotal: <span className='font-bold'>$44.00</span></h6>
                    <div className='flex justify-between'>
                      <Link to="/cart" className='text-[#262626] text-sm font-bold py-4 px-10 inline-block border border-[#2B2B2B] border-solid'>View Cart</Link>
                      <Link to={"/checkout"} className='text-[#ffffff] text-sm font-bold py-4 px-10 inline-block border border-[#2B2B2B] border-solid bg-black'>Checkout</Link>
                    </div>
                  </div>
                </div>
              }
            </Dropdown>
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}

export default NavHeader