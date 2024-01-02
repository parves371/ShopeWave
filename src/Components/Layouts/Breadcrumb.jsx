import React from "react";
import Flex from "./Flex";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ name, path, pathName, className }) => {
  return (
    <div className={`font-dm ${className}`}>
      <h1 className=" font-bold capitalize sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{name}</h1>
      <Flex className={"flex items-center gap-x-2 text-base sm:gap-x-4 md:gap-x-3 lg:gap-x-4 xl:gap-x-5"}>
        <Link to={"/"}>Home</Link>
        <FaAngleRight />
        <Link to={path}>{pathName}</Link>
      </Flex>
    </div>
  );
};

export default Breadcrumb;
