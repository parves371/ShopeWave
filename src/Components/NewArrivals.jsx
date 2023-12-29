import React from "react";
import Slider from "react-slick";

import Container from "./Layouts/Container";
import Title from "./Layouts/Title";
import Product from "./Layouts/Product";
import productImg1 from "../assets/product.png";
import bestselers from "../assets/bestselers.png";
import ad2 from "../assets/ad2.png";

import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Img from "./Layouts/Img";
import specialOffersImg from "../assets/Specialoffers.png";
const NewArrivals = () => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "p-7 rounded-full bg-[#979797] absolute z-10 text-2xl top-40 left-2"
        }
        style={{ ...style }}
        onClick={onClick}
      >
        {" "}
        <HiArrowSmLeft />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          "p-7 rounded-full bg-[#979797] absolute z-10 text-2xl top-40 right-2"
        }
        style={{ ...style }}
        onClick={onClick}
      >
        {" "}
        <HiArrowSmRight />
      </div>
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 737,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="cd:mt-[217px] mt-5">
      <Container>
        <Title title={"New Arrivals"} className={""} />
        <Slider {...settings} className="gap-4">
          <div>
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={productImg1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              className={"p-2"}
            />
          </div>
          <div>
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={productImg1}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              className={"p-2"}
            />
          </div>
          <div>
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={productImg1}
              productName={"Basic Crew Neck Tee"}
              className={"p-2"}
              price={"$44.00"}
            />
          </div>
          <div>
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={productImg1}
              productName={"Basic Crew Neck Tee"}
              className={"p-2"}
              price={"$44.00"}
            />
          </div>
          <div>
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={productImg1}
              productName={"Basic Crew Neck Tee"}
              className={"p-2"}
              price={"$44.00"}
            />
          </div>
        </Slider>
        <div className="flex-col justify-between mt-4 flex flex-wrap xl:mt-[217px] p-2 sm:flex-row gap-y-5 gap-x-4">
          <Product
            showBage={true}
            bageName={"10%"}
            productImg={bestselers}
            productName={"Basic Crew Neck Tee"}
            price={"$44.00"}
            className={"sm:w-[48%] cd:w-[24%] "}
          />
          <Product
            showBage={true}
            bageName={"10%"}
            productImg={bestselers}
            productName={"Basic Crew Neck Tee"}
            price={"$44.00"}
            className={"sm:w-[48%] cd:w-[24%] "}
          />
          <Product
            showBage={true}
            bageName={"10%"}
            productImg={bestselers}
            productName={"Basic Crew Neck Tee"}
            price={"$44.00"}
            className={"sm:w-[48%] cd:w-[24%] "}
          />
          <Product
            showBage={true}
            bageName={"10%"}
            productImg={bestselers}
            productName={"Basic Crew Neck Tee"}
            price={"$44.00"}
            className={"sm:w-[48%] cd:w-[24%] "}
          />
        </div>
        <div className="cd:mt-[217px] mt-3">
          <Img src={ad2} />
        </div>
        <section className="cd:mt-32 mt-5">
          <Title title={"Special Offers"} className={""} />

          <div className="flex-col justify-between mt-4 flex flex-wrap  p-2 sm:flex-row gap-y-5 gap-x-4 ">
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={specialOffersImg}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              className={"sm:w-[48%] cd:w-[24%]"}
            />
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={bestselers}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              className={"sm:w-[48%] cd:w-[24%]"}
            />
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={bestselers}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              className={"sm:w-[48%] cd:w-[24%]"}
            />
            <Product
              showBage={true}
              bageName={"10%"}
              productImg={bestselers}
              productName={"Basic Crew Neck Tee"}
              price={"$44.00"}
              className={"sm:w-[48%] cd:w-[24%]"}
            />
          </div>
        </section>
      </Container>
    </section>
  );
};

export default NewArrivals;
