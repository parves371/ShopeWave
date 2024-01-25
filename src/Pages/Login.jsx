import React, { useState } from "react";

import Container from "../Components/Layouts/Container";
import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Inpute from "../Components/Layouts/Inpute";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputeValue, setInputeValue] = useState({
    email: "",
    password: "",
  });
  const [inputeError, setInputeError] = useState({
    email: "",
    password: "",
  });
  const handleInpute = (e) => {
    const { value, name } = e.target;
    setInputeValue((prevdata) => ({ ...prevdata, [name]: value }));
    setInputeError((prevdata) => ({ ...prevdata, [name]: "" }));
  };

  const checkValidation = () => {
    const newError = {
      email: "",
      password: "",
    };

    if (!inputeValue.email) {
      newError.email = "Input your email";
    }
    if (!inputeValue.password) {
      newError.password = "Input your password";
    }

    setInputeError((prevdata) => ({ ...prevdata, ...newError }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
  };
  return (
    <section className="p-4">
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
          <Inpute
            label={"Email address"}
            placeholder={"company@domain.com"}
            type={"text"}
            name={"email"}
            error={inputeError.email}
            onchange={handleInpute}
            value={inputeValue.email}
          />
          <Inpute
            label={"Password"}
            placeholder={".............."}
            type={"password"}
            name={"password"}
            error={inputeError.password}
            onchange={handleInpute}
            value={inputeValue.password}
          />
          <button
            className="px-20 py-4 text-[#2B2B2B] bg-white mt-6 mr-4 cd:mr-0 border border-solid border-[#2B2B2B]"
            type="submit"
          >
            Log in
          </button>
        </form>
        <h1 className=" font-bold capitalize text-xl lg:text-2xl xl:text-3xl mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 cd:mt-32">
          New Customer
        </h1>
        <p className="text-base text-[#767676] font-normal cd:w-[644px] mt-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <Link to={"/singup"} className="px-20 py-4 bg-[#262626] text-white mt-6 mr-4 cd:mr-0 ">
          Continue
        </Link>
      </Container>
    </section>
  );
};

export default Login;
