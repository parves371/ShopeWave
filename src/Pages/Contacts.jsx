import React, { useState } from "react";

import Container from "../Components/Layouts/Container";
import Inpute from "../Components/Layouts/Inpute";
import Breadcrumb from "../Components/Layouts/Breadcrumb";

const Contacts = () => {
  const [inputeValue, setInputeValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [inputeError, setInputeError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInpute = (e) => {
    const { value, name } = e.target;
    setInputeValue((prevdata) => ({ ...prevdata, [name]: value }));
    setInputeError((prevdata) => ({ ...prevdata, [name]: "" }));
  };

  const checkValidation = () => {
    const newError = {
        name: "",
        email: "",
        message: "",
      };

    if (!inputeValue.name) {
        newError.name = "Input your name";
    }
    if (!inputeValue.email) {
        newError.email = "Input your email";
    }
    if (!inputeValue.message) {
        newError.message = "Input your message";
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
        <form action="" onSubmit={handleSubmit}>
          <h1 className=" font-bold capitalize sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-32 mb-10">
            Fill up a Form
          </h1>
          <Inpute
            label={"Name"}
            placeholder={"Your name here"}
            type={"text"}
            name={"name"}
            error={inputeError.name}
            onchange={handleInpute}
            value={inputeValue.name}
          />
          <Inpute
            label={"Email"}
            placeholder={"Your email here"}
            type={"text"}
            name={"email"}
            error={inputeError.email}
            onchange={handleInpute}
            value={inputeValue.email}
          />
          <Inpute
            label={"Message"}
            placeholder={"Your message here"}
            type={"text"}
            name={"message"}
            error={inputeError.message}
            onchange={handleInpute}
            value={inputeValue.message}
          />
          <button
            className="px-20 py-4 bg-[#262626] text-white mt-6 mr-4 cd:mr-0"
            type="submit"
          >
           Post
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contacts;
