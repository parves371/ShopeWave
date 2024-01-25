import React, { useEffect, useState } from 'react';
import Container from './Layouts/Container';
import Flex from './Layouts/Flex';
import Img from './Layouts/Img';
import Logo from '../assets/Logo.webp';
import List from './Layouts/List';
import ListItem from './Layouts/ListItem';
import { FaBars } from 'react-icons/fa6';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    useEffect(() => {
        const resize = () => {
            if (window.innerWidth < 640) {
                setShowMenu(false);
            }
        };
        window.addEventListener("resize", resize)
        resize();
    }, []);
    return (
        <nav className='py-8 px-2'>
            <Container>
                <Flex className={"items-center"}>
                    <Img src={Logo} className={"sm:w-[10%]"} />
                    <div className='w-[90%] z-10'>
                        <FaBars className='sm:hidden ml-auto cursor-pointer' onClick={handleShowMenu} />
                        {
                            showMenu &&
                            <List className={"sm:flex gap-x-10 font-dm text-sm text-[#767676] capitalize justify-center absolute sm:relative w-full bg-black sm:bg-transparent left-0 top-20 text-center sm:top-0"}>
                                <ListItem listName={"Home"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all  sm:p-0 sm:hover:pl-0 sm:hover:text-[#767676]"} link={'/'} />
                                <ListItem listName={"Shope"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all  sm:p-0 sm:hover:pl-0 sm:hover:text-[#767676]"} link={'/shope'}/>
                                <ListItem listName={"About"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all  sm:p-0 sm:hover:pl-0 sm:hover:text-[#767676]"}  link={'/about'}/>
                                <ListItem listName={"Contacts"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all  sm:p-0 sm:hover:pl-0 sm:hover:text-[#767676]"} link={'/contacts'}/>
                                <ListItem listName={"Journal"} linkClassName={"py-4 px-5 block hover:text-[#FFFFFF] transition-all  sm:p-0 sm:hover:pl-0 sm:hover:text-[#767676]"} />
                            </List>
                        }
                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar