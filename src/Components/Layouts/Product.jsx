import React from "react";

import Img from "./Img";
import Flex from "./Flex";
import { BsHeartFill, BsCart3 } from "react-icons/bs";
import { IoMdGitCompare } from "react-icons/io";
import { Link } from "react-router-dom";

const Product = ({
  showBage,
  bageName,
  productImg,
  price,
  productName,
  className,
  imgClassName,
  link
}) => {
  return (
    <Link to={link} className={`${className} font-dm relative`}>
      {showBage && (
        <div className="bg-black py-3 px-8 absolute top-5 left-6 text-white test-sm font-bold z-10">
          <h6>{bageName}</h6>
        </div>
      )}
      <div className="relative group ">
        <Img
          src={productImg}
          imgClassName={imgClassName}
          className={""}
        />

        <div className="bottom-0 left-0 absolute w-full p-[30px] bg-white transition-all scale-0 group-hover:scale-100 duration-300">
          <Flex
            className={
              "items-center justify-end text-base gap-4 mb-5  font-normal"
            }
          >
            <h6 className="text-[#767676]">Add to Wish List</h6>
            <BsHeartFill />
          </Flex>
          <Flex
            className={
              "items-center justify-end text-base gap-4 mb-5  font-normal"
            }
          >
            <h6 className="text-[#767676]">Compare</h6>
            <IoMdGitCompare />
          </Flex>
          <Flex
            className={
              "items-center justify-end text-base gap-4 text-[#262626] font-bold"
            }
          >
            <h6>Add to Cart</h6>
            <BsCart3 />
          </Flex>
        </div>
      </div>
      <Flex className={"mt-6 justify-between items-center w-full relative"}>
        <h6 className="text-xl font-bold w-[87%]">{productName}</h6>
        <h6 className="text-sm text-[#767676] w-[12%] text-end top-1 absolute right-0">{price}</h6>
      </Flex>
    </Link>
  );
};

export default Product;
