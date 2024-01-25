import React, { useState } from "react";

import Container from "../Components/Layouts/Container";
import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Inpute from "../Components/Layouts/Inpute";
import Flex from "../Components/Layouts/Flex";
export const Singup = () => {
  const [inputeValue, setInputeValue] = useState({
    fname: "",
    lname: "",
    email: "",
    telephone: "",
    address: "",
    optionalAdress: "",
    city: "",
    postCode: "",
    password: "",
    repassword: "",
  });
  const [inputeError, setInputeError] = useState({
    fname: "",
    lname: "",
    email: "",
    telephone: "",
    address: "",
    city: "",
    postCode: "",
    password: "",
    repassword: "",
  });
  const handleInpute = (e) => {
    const { value, name } = e.target;
    setInputeValue((prevdata) => ({ ...prevdata, [name]: value }));
    setInputeError((prevdata) => ({ ...prevdata, [name]: "" }));
  };

  const checkValidation = () => {
    const newError = {
      fname: "",
      lname: "",
      email: "",
      telephone: "",
      address: "",
      city: "",
      postCode: "",
      password: "",
      repassword: "",
    };

    if (!inputeValue.fname) {
      newError.fname = "Inpute your fname";
    }
    if (!inputeValue.lname) {
      newError.lname = "Inpute your last name";
    }
    if (!inputeValue.email) {
      newError.email = "Inpute your email";
    }
    if (!inputeValue.telephone) {
      newError.telephone = "Inpute your telephone";
    }
    if (!inputeValue.address) {
      newError.address = "Inpute your address";
    }
    if (!inputeValue.city) {
      newError.city = "Inpute your city";
    }
    if (!inputeValue.postCode) {
      newError.postCode = "Inpute your postCode";
    }
    if (!inputeValue.password) {
      newError.password = "Inpute your password";
    }
    if (!inputeValue.repassword) {
      newError.repassword = "Inpute your Repeat Password";
    }

    setInputeError((prevdata) => ({ ...prevdata, ...newError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
  };

  return (
    <section className="p-4 font-dm">
      <Container>
        <Breadcrumb
          className={"mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 ml-4"}
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <p className="text-base text-[#767676] font-normal cd:w-[644px] mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 cd:mt-32">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <form action="" onSubmit={handleSubmit}>
          <h1 className=" font-bold capitalize sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 cd:mt-32 mb-10">
            Fill up a Form
          </h1>
          <Flex className={"cd:w-[1055px] gap-x-10"}>
            <Inpute
              label={"First Name"}
              placeholder={"First Name"}
              type={"text"}
              name={"fname"}
              error={inputeError.fname}
              onchange={handleInpute}
              value={inputeValue.fname}
            />
            <Inpute
              label={"Last Name"}
              placeholder={"Last Name"}
              type={"text"}
              name={"lname"}
              error={inputeError.lname}
              onchange={handleInpute}
              value={inputeValue.lname}
            />
          </Flex>
          <Flex className={"cd:w-[1055px] gap-x-10"}>
            <Inpute
              label={"Email address"}
              placeholder={"company@domain.com"}
              type={"email"}
              name={"email"}
              error={inputeError.email}
              onchange={handleInpute}
              value={inputeValue.email}
            />
            <Inpute
              label={"Telephone"}
              placeholder={"Your phone number"}
              type={"tel"}
              name={"telephone"}
              error={inputeError.telephone}
              onchange={handleInpute}
              value={inputeValue.telephone}
            />
          </Flex>
          <h1 className=" font-bold capitalize sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 cd:mt-32 mb-10">
            New Customer
          </h1>
          <Flex className={"cd:w-[1055px] gap-x-10"}>
            <Inpute
              label={"Address 1"}
              placeholder={"Address"}
              type={"text"}
              name={"address"}
              error={inputeError.address}
              onchange={handleInpute}
              value={inputeValue.address}
            />
            <Inpute
              label={"Address 2"}
              placeholder={"Optional"}
              type={"text"}
              name={"optionalAdress"}
              error={inputeError.optionalAdress}
              onchange={handleInpute}
              value={inputeValue.optionalAdress}
            />
          </Flex>

          <Flex className={"cd:w-[1055px] gap-x-10"}>
            <Inpute
              label={"City"}
              placeholder={"Your city"}
              type={"text"}
              name={"city"}
              error={inputeError.city}
              onchange={handleInpute}
              value={inputeValue.city}
            />
            <Inpute
              label={"postCode"}
              placeholder={"05228"}
              type={"tel"}
              name={"postCode"}
              error={inputeError.postCode}
              onchange={handleInpute}
              value={inputeValue.postCode}
            />
          </Flex>
          <h1 className=" font-bold capitalize sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 cd:mt-32 mb-10">
            Your Password
          </h1>
          <Flex className={"cd:w-[1055px] gap-x-10"}>
            <Inpute
              label={"Password"}
              placeholder={".............."}
              type={"password"}
              name={"password"}
              error={inputeError.password}
              onchange={handleInpute}
              value={inputeValue.password}
            />
            <Inpute
              label={"Repeat Password"}
              placeholder={"Repeat Password"}
              type={"password"}
              name={"repassword"}
              error={inputeError.repassword}
              onchange={handleInpute}
              value={inputeValue.repassword}
            />
          </Flex>
          <Flex className={"gap-x-4 items-center"}>
            <Inpute type={"checkbox"} />
            <p className="text-sm text-[#767676] font-normal">
              I have read and agree to the Privacy Policy
            </p>
          </Flex>
          <Flex className={"gap-x-3 cd:gap-x-10 mt-6"}>
            <p className="text-sm text-[#767676] font-normal">
              Subscribe Newsletter
            </p>

            <Flex className={"gap-x-4 items-center"}>
              <Inpute type={"checkbox"} />
              <p className="text-sm text-[#767676] font-normal">Yes</p>
            </Flex>
            <Flex className={"gap-x-4 items-center"}>
              <Inpute type={"checkbox"} />
              <p className="text-sm text-[#767676] font-normal">No</p>
            </Flex>
          </Flex>
          <button
            className="px-20 py-4 bg-[#2B2B2B] text-white mt-6 mr-4 cd:mr-0 border border-solid border-[#2B2B2B]"
            type="submit"
          >
            Log in
          </button>
        </form>
      </Container>
    </section>
  );
};
