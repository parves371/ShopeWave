import React, { useState } from "react";
import Img from "./Layouts/Img";
import BannerImg from "../assets/Banner.png";
import Slider from "react-slick";
import Flex from "./Layouts/Flex";
import { FaCarSide } from "react-icons/fa6";
import { FaUndoAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
  const [dot, setdot] = useState(0);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    autoplay: false,
    beforeChange: (current, next) => setdot(next),
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            left: "200px",
            transform: "translate(-50%,-50%)",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          dot === i
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "2px #262626 solid",
                fontFamily: "DM Sans",
                fontSize: "10px",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "2px white solid",
                fontFamily: "DM Sans",
                fontSize: "10px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <section>
      <Slider {...settings}>
        <Link to={"/shope"}>
          <div>
            <Img src={BannerImg} imgClassName={"w-full"}/>
          </div>
        </Link>
        <Link to={"/shope"}>
          <div>
            <Img src={BannerImg} imgClassName={"w-full"}/>
          </div>
        </Link>
        <Link to={"/shope"}>
          <div>
            <Img src={BannerImg} imgClassName={"w-full"}/>
          </div>
        </Link>
        <Link to={"/shope"}>
          <div>
            <Img src={BannerImg} imgClassName={"w-full"}/>
          </div>
        </Link>
      </Slider>
      <Flex
        className={
          "justify-around font-dm py-[30px] border-[#F0F0F0] border border-t-0 border-solid"
        }
      >
        <div className="flex  gap-x-4 items-center w-[176px] font-bold">
          <span className="text-[#262626] text-2xl">2</span>
          <h5 className="text-[#6D6D6D text-base font-normal">
            Two years warranty
          </h5>
        </div>
        <div className="w-[140px] flex items-center gap-x-4">
          <FaCarSide />
          <h5 className="text-[#6D6D6D] font-normal text-base ">
            Free shipping
          </h5>
        </div>
        <div className="flex gap-x-4 items-center">
          <FaUndoAlt />
          <h5 className="text-[#6D6D6D] font-normal text-base">
            Return policy in 30 days
          </h5>
        </div>
      </Flex>
    </section>
  );
};

export default Banner;
