import React from "react";
import Flex from "./Flex";

import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = ({ name, path, pathName, className }) => {
  return (
    <div className={`font-dm ${className}`}>
      <h1 className="text-[49px] font-bold capitalize">{name}</h1>
      <Flex className={"items-center gap-x-2"}>
        <Link to={"/"}>Home</Link>
        <FaAngleRight />
        <Link to={path}>{pathName}</Link>
      </Flex>
    </div>
  );
};

export default Breadcrumb;
