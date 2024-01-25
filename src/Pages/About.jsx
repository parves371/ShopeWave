import React from "react";

import Container from "../Components/Layouts/Container";
import Flex from "../Components/Layouts/Flex";
import Img from "../Components/Layouts/Img";
import Breadcrumb from "../Components/Layouts/Breadcrumb";

import About2 from "../assets/About.png";
import About1 from "../assets/About1.png";
const About = () => {
  return (
    <section className="font-dm">
      <Container>
        <Breadcrumb
          className={"mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 ml-4"}
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex
          className={
            "justify-between mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-32 flex-col sm:flex-row p-3 gap-y-5 gap-x-10"
          }
        >
          <Img src={About1} />
          <Img src={About2} />
        </Flex>
        <p className="text-lg sm:text-xl cd:text-4xl text-[#262626] font-normal mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-32 p-3  leading-8">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
        <Flex
          className={
            "gapx-10 justify-between flex-col cd:flex-row mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-28"
          }
        >
          <Flex className={"flex-col  gap-y-3 cd:w-[30%] text-justify p-3"}>
            <h2 className="text-2xl text-[#262626] font-bold">Our Vision</h2>
            <p className="text-base text-[#767676] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Flex>
          <Flex className={"flex-col  gap-y-3 cd:w-[30%] text-justify p-3"}>
            <h2 className="text-2xl text-[#262626] font-bold">Our Story</h2>
            <p className="text-base text-[#767676] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Flex>
          <Flex className={"flex-col  gap-y-3 cd:w-[30%] text-justify p-3"}>
            <h2 className="text-2xl text-[#262626] font-bold">Our Brands</h2>
            <p className="text-base text-[#767676] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
