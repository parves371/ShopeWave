import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";

import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Container from "../Components/Layouts/Container";
import Flex from "../Components/Layouts/Flex";
import { addToCart } from "../app/slices/cartSlice";

const SingleProduct = () => {
  // const [imgs, setImgs] = useState(null);
  const [products, setProducts] = useState([]);
  const [showDes, setShowDes] = useState(false);
  const [showDes2, setShowDes2] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    // Simulating an asynchronous data fetch
    const fetchData = async () => {
      // For example, fetching data from an API
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();

      // Update the state with the fetched data
      setProducts(data);
    };

    fetchData();
  }, []);
  // console.log(products);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ ...products, qun: 1 }));
  };
  return (
    <section className="font-dm">
      <Container>
        <Breadcrumb
          className={
            "mt-12 sm:mt-16 lg:mt-20 xl:mt-24 ml-5 sm:ml-8 lg:ml-10 xl:ml-12"
          }
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />

        {products ? (
          <Flex
            className={
              "flex-wrap gap-4 md:gap-6 lg:gap-6 xl:gap-6 mt-14 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 max-w-[1600px] mx-auto justify-center"
            }
          >
            {products.images &&
              products?.images.map((items, index) => (
                <img
                  key={index}
                  src={items}
                  alt=""
                  className="w-[46%] sm:w-[47%] md:w-[40%] lg:w-[40%] xl:w-1/5 px-2 md:px-4 lg:px-6 xl:px-8 mb-4 cd:w-[48%]"
                />
              ))}
          </Flex>
        ) : (
          <div>No data available</div>
        )}

        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 ml-4 sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12 cd:ml-0">
          {products.title}
        </h2>
        <Flex
          className={
            "flex flex-col sm:flex-row gap-3 sm:items-center mt-4 sm:mt-8 "
          }
        >
          <Flex className={"gap-x-2 sm:ml-6 md:ml-8 lg:ml-10 ml-4 cd:ml-0"}>
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </Flex>
          <div className="text-base text-[#767676] font-normal ml-4 mt-2 sm:ml-4 sm:mt-0">
            Ratings {products.rating}%
          </div>
        </Flex>
        <Flex
          className={
            "gap-x-5 items-center mt-5 relative w-[1600px] ml-4 sm:ml-6 md:ml-8 lg:ml-10 cd:ml-0"
          }
        >
          <strike className="text-base text-gray-700 font-normal  mt-2 sm:mt-0 ">
            ${products.price}
          </strike>
          <h3 className="text-xl text-[#262626] font-bold">
            $
            {products.price -
              (products.price * products.discountPercentage) / 100}
          </h3>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-11"></span>
        </Flex>
        <Flex
          className={
            "mt-8 sm:mt-10 md:mt-12 lg:mt-14 ml-4 sm:ml-6 md:ml-8 cd:ml-0 lg:ml-10 flex gap-x-4 items-center "
          }
        >
          <h2 className="text-base text-[#262626] font-bold">Color:</h2>
          <div className="flex gap-x-2">
            <div className="w-5 h-5 rounded-full bg-[#979797] transition-all "></div>
            <div className="w-5 h-5 rounded-full bg-[#FF8686] transition-all"></div>
            <div className="w-5 h-5 rounded-full bg-[#7ED321] transition-all"></div>
            <div className="w-5 h-5 rounded-full bg-[#B6B6B6] transition-all"></div>
            <div className="w-5 h-5 rounded-full bg-[#15CBA5] transition-all"></div>
          </div>
        </Flex>
        <Flex
          className={
            "mt-8 sm:mt-10 md:mt-12 lg:mt-14 ml-4 sm:ml-6 md:ml-8 lg:ml-10 cd:ml-0 relative"
          }
        >
          <h2 className="text-base text-[#262626] font-bold">QUANTITY:</h2>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-11"></span>
        </Flex>
        <Flex
          className={
            "mt-8 sm:mt-10 md:mt-12 lg:mt-14 ml-4 sm:ml-6 md:ml-8 lg:ml-10 cd:ml-0 relative gap-x-3"
          }
        >
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
        <Flex
          className={
            "mt-8 ml-4 sm:mt-10 sm:ml-6 cd:ml-0 md:mt-12 lg:mt-16 flex gap-4 sm:gap-5 items-center"
          }
        >
          <button className="py-2 sm:py-4 px-4 sm:px-11 border border-[#262626] text-[#262626] text-base sm:text-sm font-bold">
            Add to Wish List
          </button>
          <button
            className="py-2 sm:py-4 px-4 sm:px-16 border border-[#262626] text-[#FFFFFF] text-base sm:text-sm font-bold bg-[#262626]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-[140px]"></span>
        </Flex>
        <div className="max-w-[780px] mx-auto p-4 sm:w-full cd:mx-0 cd:p-0 mt-[55px]">
          <Flex className={" items-center justify-between relative"}>
            <h2 className="text-base text-[#262626] font-bold ">
              FEATURES & DETAILS
            </h2>
            <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-12"></span>
            <GoPlus
              className="cursor-pointer"
              onClick={() => setShowDes(!showDes)}
            />
          </Flex>
        </div>
        <div className="">
          {showDes && (
            <p className="max-w-[780px] mx-auto p-4 text-normal text-base text-[rgba(118, 118, 118, 1)] mt-8 sm:mt-10 cd:mx-0 cd:p-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          )}
        </div>
        <div className="max-w-[780px] mx-auto p-4 sm:w-full cd:mx-0 cd:p-0 cd:mt-[55px]">
          <Flex className={" items-center justify-between relative"}>
            <h2 className="text-base text-[#262626] font-bold ">
              SHIPPING & RETURNS
            </h2>
            <span className="border-b border-[#D8D8D8] block w-[780px] absolute mt-12"></span>
            <GoPlus
              className="cursor-pointer"
              onClick={() => setShowDes2(!showDes2)}
            />
          </Flex>
        </div>
        <div className="">
          {showDes2 && (
            <p className="max-w-[780px] mx-auto p-4 text-normal text-base text-[rgba(118, 118, 118, 1)] mt-8 sm:mt-10 cd:mx-0 cd:p-0">
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
