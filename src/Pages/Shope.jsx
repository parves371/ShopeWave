import React, { useEffect, useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

import Container from "../Components/Layouts/Container";
import Flex from "../Components/Layouts/Flex";
import Product from "../Components/Layouts/Product";
import specialOffersImg from "../assets/Specialoffers.png";
import Paigination from "../Components/Layouts/Paigination";
import Filter from "../Components/Layouts/Filter";
import Breadcrumb from "../Components/Layouts/Breadcrumb";
import SideBar from "../Components/Layouts/SideBar";

const Shope = () => {
  const [products, setProducts] = useState([]);
  const [productsShow, setProductShow] = useState(12);
  useEffect(() => {
    let getAllProducts = fetch("https://dummyjson.com/products?limit=100").then(
      (res) => res.json().then((data) => setProducts(data.products))
    );
  }, []);
  const handleChange = (e) => {
    setProductShow(e.target.value);
  };
  return (
    <section>
      <Container>
        <Breadcrumb
          className={"mt-[124px]"}
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <div className={"gap-x-10 flex"}>
          <SideBar />
          <Flex className={"flex-col w-[75%] mt-[136px]" }>
            <Flex className={"items-center justify-between"}>
              <Flex className={"gap-5"}>
                <IoGridSharp className="text-2xl  cursor-pointer" />
                <CiBoxList className="text-2xl cursor-pointer" />
              </Flex>
              <Flex className={"gap-10"}>
                <Filter tittle={"Sort by:"}>
                  <option value="">Featured</option>
                  <option value="">high to low</option>
                </Filter>
                <Filter tittle={"Show:"} handleChange={handleChange}>
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                  <option value="60">60</option>
                </Filter>
              </Flex>
            </Flex>

            <Paigination itemsPerPage={productsShow} data={products} />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Shope;
