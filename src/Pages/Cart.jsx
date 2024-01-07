import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart, updateQun } from "../app/slices/cartSlice";

import Container from "../Components/Layouts/Container";
import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Flex from "../Components/Layouts/Flex";
import Carting from "../assets/carting.png";
import Img from "../Components/Layouts/Img";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  // console.log(qun);
  useEffect(() => {
    let tempTotal = 0;
    cartData.map((e) => {
      tempTotal +=
        e.qun * Math.ceil(e.price - (e.price * e.discountPercentage) / 100);
    });
    setTotal(tempTotal)
  }, [cartData]);

  return (
    <section>
      <Container>
        <Breadcrumb
          className={"mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 ml-4"}
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex
          className={
            "font-dm bg-[#F5F7F7] py-4 sm:py-8 justify-around items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24"
          }
        >
          <div className="w-[30%]">Product</div>
          <div className="w-[20%]">Price</div>
          <div className="w-[20%]">Quantity</div>
          <div className="w-[20%] ">Total</div>
        </Flex>
        {cartData.map((state, index) => (
          <Flex className={"flex-col border border-[#F0F0F0]"} key={index}>
            <Flex className={"font-dm py-8 justify-evenly items-center"}>
              <Flex className="w-[30%] gap-2 md:gap-4 lg:gap-4 items-center">
                <RxCross2
                  className="text-[#262626] cursor-pointer"
                  onClick={() => dispatch(removeToCart(index))}
                />
                <Img
                  src={state.thumbnail}
                  className={"w-10 sm:w-16 md:w-20 lg:w-24 xl:w-[100px]"}
                />
                <h3 className="font-bold text-xm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#262626]">
                  {state.title}
                </h3>
              </Flex>
              <div className="w-[20%] font-bold text-xm sm:text-sm md:text-base text-[#262626]">
                $
                {Math.ceil(
                  state.price - (state.price * state.discountPercentage) / 100
                )}
              </div>
              <div className="w-[20%]">
                <Flex
                  className={
                    "w-[70px] sm:w-[100px] md:w-28 cd:w-[140px] border border-[#F0F0F0] justify-between"
                  }
                >
                  <button
                    className="pl-1 py-1 sm:pl-2 sm:py-2 md:pl-3 md:py-3 lg:pl-4 lg:py-4 xl:pl-5 xl:py-5"
                    disabled={state.qun === 1 ? true : false}
                  >
                    <FiMinus onClick={() => dispatch(updateQun({ index }))} />
                  </button>

                  <input
                    type="tel"
                    className="w-5 outline-transparent p-1 text-center"
                    value={state.qun}
                    readOnly
                  />
                  <button
                    className="pr-1 py-1 sm:pr-2 sm:py-2 md:pr-3 md:py-3 lg:pr-4 lg:py-4 xl:pr-5 xl:py-5"
                    disabled={state.qun === 9 ? true : false}
                  >
                    <FiPlus
                      onClick={() =>
                        dispatch(updateQun({ index, type: "plus" }))
                      }
                    />
                  </button>
                </Flex>
              </div>
              <div className="w-[20%] font-bold text-xm sm:text-sm md:text-base text-[#262626]">
                $
                {Math.ceil(
                  state.price - (state.price * state.discountPercentage) / 100
                ) * state.qun}
              </div>
            </Flex>
            <Flex
              className={
                "py-5 items-center border border-[#F0F0F0] justify-around"
              }
            >
              <div className="w-[98%]">
                <select className="border border-[#F0F0F0] px-5 py-3 w-[255px]">
                  <option value="">SIZE</option>
                </select>
                <button className="ml-5">Apply coupon</button>
              </div>
            </Flex>
          </Flex>
        ))}
        <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-14 text-right">
          <h3 className="font-bold text-xl text-[#262626] mr-4 cd:mr-0">
            Cart totals
          </h3>
          <Flex
            className={
              "cd:w-[644px] mt-5 border border-[#F0F0F0] ml-auto flex-wrap"
            }
          >
            <Flex className={"w-full text-left"}>
              <h3 className="w-1/2 py-4 px-5 border-r border-[#F0F0F0] font-bold text-base text-[#262626]">
                Subtotal
              </h3>
              <h5 className="w-1/2 py-4 px-5">{total} $</h5>
            </Flex>
            <Flex className={"w-full text-left border-t border-[#F0F0F0]"}>
              <h3 className="w-1/2 py-4 px-5 border-r border-[#F0F0F0] font-bold text-base text-[#262626]">
                Total
              </h3>
              <h5 className="w-1/2 py-4 px-5">{total} $</h5>
            </Flex>
          </Flex>
        </div>
        <div className="text-right mt-8">
          <Link
            to={"/checkout"}
            className="px-6 py-4 bg-[#262626] text-white  mt-7 mr-4 cd:mr-0"
          >
            Proceed to Checkout
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
