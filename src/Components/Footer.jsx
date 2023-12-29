import React from "react";
import { Link } from "react-router-dom";

import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import List from "./Layouts/List";
import ListItem from "./Layouts/ListItem";
import FooterLogo from "../assets/Logo.webp";
import Img from "./Layouts/Img";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="font-dm bg-[#f5f5f3] py-[59px] cd:mt-[106px] px-4 mt-4">
      <Container>
        <Flex className={"sm:justify-between flex-col sm:flex-row text-center gap-y-2 "}>
          <div className="">
            <h6 className="uppercase text-base font-bold ">menu</h6>
            <List className={"mt-4"}>
              <ListItem
                listName={"Home"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Shop"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"About"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Contact"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Journal"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
            </List>
          </div>
          <div className="">
            <h6 className="uppercase text-base font-bold ">SHOP</h6>
            <List className={"mt-4"}>
              <ListItem
                listName={"Category 1"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Category 2"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Category 3"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Category 4"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Category 5"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
            </List>
          </div>
          <div className="">
            <h6 className="uppercase text-base font-bold ">HELP</h6>
            <List className={"mt-4"}>
              <ListItem
                listName={"Privacy Policy"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Terms & Conditions"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Special E-shop"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Shipping"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
              <ListItem
                listName={"Secure Payments"}
                linkClassName={"text-sm font-normal text-[#6D6D6D] mb-[6px]"}
              />
            </List>
          </div>
          <Flex className={"flex-col text-base font-bold "}>
            <Link to={"tel:(052) 611-5711"}>(052) 611-5711</Link>
            <Link to={"maito:company@domain.com"}>company@domain.com</Link>
            <a href="https://maps.app.goo.gl/4buwsJyLCbU1U7Kc7" target="_blank">
              <address className="text-sm font-normal text-[#6D6D6D] mt-4">
                575 Crescent Ave. Quakertown, PA 18951
              </address>
            </a>
          </Flex>
          <Img src={FooterLogo} className={"hidden sm:block"} />
        </Flex>
        <Flex className={"sm:mt-16 mt-3 items-center justify-between flex-col gap-y-4 sm:flex-row"}>
          <Flex className={"gap-x-6 text-xl items-center"}>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </Flex>
          <p className="text-[#6D6D6D] text-sm font-normal text-center">
            {year} Orebi Minimal eCommerce Figma Template by Adveits
          </p>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
