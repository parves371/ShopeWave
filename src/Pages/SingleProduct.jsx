import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Container from "../Components/Layouts/Container";
import Flex from "../Components/Layouts/Flex";
import Img from "../Components/Layouts/Img";

const SingleProduct = () => {
  // const [imgs, setImgs] = useState(null);
  const [products, setProducts] = useState([]);
  const [showDes, setShowDes] = useState(false);
  const [showDes2, setShowDes2] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    // Simulating an asynchronous data fetch
    const fetchData = async () => {
      // Replace this with your actual data fetching logic
      // For example, fetching data from an API
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();

      // Update the state with the fetched data
      setProducts(data);
    };

    fetchData();
  }, []);
  console.log(products);
  return (
    <section className="font-dm">
      <Container>
        <Breadcrumb
          className={"mt-[124px]"}
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />

        {products ? (
          <Flex className={"flex-wrap gap-10 mt-[137px]"}>
            {products.images &&
              products?.images.map((items) => (
                <img src={items} alt="" className="w-[780px]" />
              ))}
          </Flex>
        ) : (
          <div>No data available</div>
        )}

        <h2 className="text-[39px] font-bold text-[#262626] mt-12">
          {products.title}
        </h2>
        <Flex className={"gap-5 items-center mt-4"}>
          <Flex className={"gap-x-2"}>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </Flex>
          <div className="text-base text-[#767676] font-normal">
            {" "}
            Ratings {products.rating}%
          </div>
        </Flex>
        <Flex className={"gap-x-5 items-center mt-5 relative "}>
          <strike className="text-base text-[#767 676] font-normal">
            ${products.price}
          </strike>
          <h3 className="text-xl text-[#262626] font-bold">
            $
            {products.price -
              (products.price * products.discountPercentage) / 100}
          </h3>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-16"></span>
        </Flex>
        <Flex className={"mt-14 gap-x-4 items-center"}>
          <h2 className="text-base text-[#262626] font-bold">Color:</h2>
          <div className="flex gap-x-2">
            <div className="w-5 h-5 rounded-full bg-[#979797] transition-all "></div>
            <div className="w-5 h-5 rounded-full bg-[#FF8686] transition-all"></div>
            <div className="w-5 h-5 rounded-full bg-[#7ED321] transition-all"></div>
            <div className="w-5 h-5 rounded-full bg-[#B6B6B6] transition-all"></div>
            <div className="w-5 h-5 rounded-full bg-[#15CBA5] transition-all"></div>
          </div>
        </Flex>
        <Flex className={"mt-9 relative"}>
          <h2 className="text-base text-[#262626] font-bold">QUANTITY:</h2>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-11"></span>
        </Flex>
        <Flex className={"mt-9 relative gap-x-3"}>
          <h2 className="text-base text-[#262626] font-bold">STATUS: </h2>
          {products.stock !== 0 ? (
            <div className="text-base text-[#767676] font-normal">in stock</div>
          ) : (
            <div className="text-base text-[#767676] font-normal">
              out of stock
            </div>
          )}
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-11"></span>
        </Flex>
        <Flex className={"mt-16 gap-5 items-center"}>
          <button className="py-4 px-11 border border-[#262626] text-[#262626] text-sm font-bold">
            Add to Wish List
          </button>
          <button className="py-4 px-16 border border-[#262626] text-[#FFFFFF] text-sm font-bold bg-[#262626]">
            Add to Cart
          </button>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-[140px]"></span>
        </Flex>
        <Flex className={"mt-[55px] items-center gap-x-[600px] relative"}>
          <h2 className="text-base text-[#262626] font-bold ">
            FEATURES & DETAILS
          </h2>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-12"></span>
          <GoPlus onClick={() => setShowDes(!showDes)} />
        </Flex>
        <div className="">
          {showDes && (
            <p className="w-[780px] text-normal text-base text-[rgba(118, 118, 118, 1)] mt-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>
        <Flex className={"mt-[55px] items-center gap-x-[600px] relative"}>
          <h2 className="text-base text-[#262626] font-bold ">
          SHIPPING & RETURNS
          </h2>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-12"></span>
          <GoPlus onClick={() => setShowDes2(!showDes2)} />
        </Flex>
        <div className="">
          {showDes2 && (
            <p className="w-[780px] text-normal text-base text-[rgba(118, 118, 118, 1)] mt-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;
