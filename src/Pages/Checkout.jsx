import React, { useState } from "react";

import Container from "../Components/Layouts/Container";
import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Flex from "../Components/Layouts/Flex";
import Inpute from "../Components/Layouts/Inpute";

const Checkout = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const [inputeValue, setInputeValue] = useState({
    fName: "",
    lName: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    address: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  });

  const handleInpute = (e) => {
    const { name, value } = e.target;
    setInputeValue((prevData) => ({ ...prevData, [name]: value }));
    setErrors({ ...errors, [name]: "" });
  };

  const checkValidation = (e) => {
    let newErrors = {};
    if (!inputeValue.fName) {
      newErrors = { ...newErrors, fName: "Input your first name" };
    }
    if (!inputeValue.lName) {
      newErrors = { ...newErrors, lName: "Input your last name" };
    }
    if (!inputeValue.address) {
      newErrors = { ...newErrors, address: "Input your last address" };
    }
    if (!inputeValue.city) {
      newErrors = { ...newErrors, city: "Input your last city" };
    }
    if (!inputeValue.postCode) {
      newErrors = { ...newErrors, postCode: "Input your last postCode" };
    }
    if (!inputeValue.phone) {
      newErrors = { ...newErrors, phone: "Input your last phone" };
    }
    if (!inputeValue.email) {
      newErrors = { ...newErrors, email: "Input your last email" };
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  };
  const handleSubmite = (e) => {
    e.preventDefault();
    checkValidation();
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          className={
            "mt-12 sm:mt-16 lg:mt-20 xl:mt-24 ml-5 sm:ml-8 lg:ml-10 xl:ml-12 cd:mt-[124px] cd:ml-0"
          }
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <h5 className="font-dm text-base text-[#767676] font-normal  mt-8 sm:mt-12 lg:mt-16 xl:mt-20 ml-5 sm:ml-8 lg:ml-10 xl:ml-12 cd:mt-[127px] cd:ml-0">
          Have a coupon?{" "}
          <span
            className="font-dm text-base text-[#262626] font-normal cursor-pointer"
            onClick={() => setShowCoupon(!showCoupon)}
          >
            Click here to enter your code
          </span>
        </h5>
        {showCoupon && (
          <Flex
            className={
              "justify-center items-center border-4 border-dashed border-[#F0F0F0] cd:w-[600px] px-5 py-3 mt-8 mx-5 sm:mx-8 lg:mx-10 xl:mx-12 cd:mx-0"
            }
          >
            <input
              type="text"
              className="px-5 py-3 w-[255px] border border-[#F0F0F0] outline-[#F0F0F0]"
            />
            <button className="font-dm text-base text-[#262626] font-normal ml-5">
              apply coupon
            </button>
          </Flex>
        )}
        <form>
          <h2 className="mt-3 ml-5 sm:ml-8 lg:ml-10 xl:ml-12 cd:ml-0">
            Billing Details
          </h2>
          <Flex
            className={
              "gap-9 mt-10 justify-between cd:w-[1055px] px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
          >
            {" "}
            <Inpute
              className={"w-[500px]"}
              type={"text"}
              label={"First Name *"}
              placeholder={"First Name"}
              value={inputeValue.fName}
              onchange={handleInpute}
              name="fName"
              error={errors.fName}
            />
            <Inpute
              className={"w-[500px]"}
              type={"text"}
              label={"Last Name *"}
              placeholder={"Last Name"}
              value={inputeValue.lName}
              onchange={handleInpute}
              name="lName"
              error={errors.lName}
            />
          </Flex>
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"text"}
            label={"Companye Name (optional)"}
            placeholder={"Company Name"}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"text"}
            label={"Street Address *"}
            placeholder={"House number and street name"}
            value={inputeValue.address}
            onchange={handleInpute}
            name="address"
            error={errors.address}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"text"}
            placeholder={"Apartment, suite, unit etc. (optional)"}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"text"}
            label={"Town/City *"}
            placeholder={"Town/City"}
            value={inputeValue.city}
            onchange={handleInpute}
            name="city"
            error={errors.city}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"text"}
            label={"Counrty (optional)"}
            placeholder={"Counrty"}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"text"}
            label={"Post Code *"}
            placeholder={"Post Code"}
            value={inputeValue.postCode}
            onchange={handleInpute}
            name="postCode"
            error={errors.postCode}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"number"}
            label={"Phone *"}
            placeholder={"Phone"}
            value={inputeValue.phone}
            onchange={handleInpute}
            name="phone"
            error={errors.phone}
          />
          <Inpute
            className={
              "cd:w-[1055px] mt-6 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0"
            }
            type={"email"}
            label={"Email Address *"}
            placeholder={"Email"}
            value={inputeValue.email}
            onchange={handleInpute}
            name="email"
            error={errors.email}
          />
          <h4 className="font-dm font-bold text-4xl text-[#262626] mt-8 sm:mt-10 lg:mt-12 xl:mt-14 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0 cd:mt-[129px]">
            Additional Information
          </h4>
          <div className="cd:w-[1040px] mt-6 sm:mt-8 lg:mt-10 px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0">
            <label>Other Notes (optional)</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="block w-full mt-2 p-4 border border-[#F0F0F0]"
            ></textarea>
          </div>
        </form>
        <h4 className="font-dm font-bold text-4xl text-[#262626] mt-8 sm:mt-10 lg:mt-12 xl:mt-14 cd:mt-[129px] px-5 sm:px-8 lg:px-10 xl:px-12 cd:px-0">
          Your Order
        </h4>
        <Flex
          className={
            "cd:w-[644px] mt-10 border border-[#F0F0F0] flex-wrap mx-5 sm:mx-8 lg:mx-10 xl:mx-12 cd:mx-0"
          }
        >
          <Flex className={"w-full text-left"}>
            <h3 className="w-1/2 py-4 px-5 border-r border-[#F0F0F0] font-bold text-base text-[#262626]">
              Product
            </h3>
            <h5 className="w-1/2 py-4 px-5">Total</h5>
          </Flex>
          <Flex className={"w-full text-left border-t border-[#F0F0F0]"}>
            <h3 className="w-1/2 py-4 px-5 border-r border-[#F0F0F0] font-bold text-base text-[#262626]">
              Product name x 1
            </h3>
            <h5 className="w-1/2 py-4 px-5">389.99 $</h5>
          </Flex>
          <Flex className={"w-full text-left border-t border-[#F0F0F0]"}>
            <h3 className="w-1/2 py-4 px-5 border-r border-[#F0F0F0] font-bold text-base text-[#262626]">
              Subtotal
            </h3>
            <h5 className="w-1/2 py-4 px-5">389.99 $</h5>
          </Flex>
          <Flex className={"w-full text-left border-t border-[#F0F0F0]"}>
            <h3 className="w-1/2 py-4 px-5 border-r border-[#F0F0F0] font-bold text-base text-[#262626]">
              Total
            </h3>
            <h5 className="w-1/2 py-4 px-5">389.99 $</h5>
          </Flex>
        </Flex>
        <div className="cd:w-[1053px] border border-[#F0F0F0] mt-14 mx-5 sm:mx-8 lg:mx-10 xl:mx-12 cd:mx-0">
          <div
            className={"mx-5 sm:mx-8 lg:mx-10 xl:mx-12 py-6 flex-col gap-y-4 "}
          >
            <input type="radio" name="bank" id="bank" />
            <label
              htmlFor="bank"
              className="font-dm font-bold text-base text-[#262626] ml-2"
            >
              Bank
            </label>

            <p className="bg-[#F7F8F9] font-normal font-dm text-base text-[#767676] cd:w-[985px] p-4 mt-6">
              Pay via Bank; you can pay with your credit card if you don’t have
              a Bank account.
            </p>

            <input type="radio" name="bank" id="bank2" className="mt-6" />
            <label
              htmlFor="bank2"
              name="bank"
              className="font-dm font-bold text-base text-[#262626] ml-2"
            >
              Bank 2
            </label>

            <p className="bg-[#F7F8F9] font-normal font-dm text-base text-[#767676] cd:w-[985px] p-4 mt-4">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
            <button
              className="px-6 py-4 bg-[#262626] text-white mt-6 mr-4 cd:mr-0"
              onClick={handleSubmite}
            >
              Proceed to Bank
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Checkout;
