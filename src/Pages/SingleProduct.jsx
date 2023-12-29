import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Breadcrumb from "../Components/Layouts/Breadcrumb";
import Container from "../Components/Layouts/Container";
import Flex from "../Components/Layouts/Flex";
import Img from "../Components/Layouts/Img";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let getAllProducts = async () => {
      await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
        res.json().then((data) => setProducts(data))
      );
    };
    getAllProducts();
  }, []);
  console.log(products);
  return (
    <section>
      <Container>
        <Breadcrumb
          className={"mt-[124px]"}
          pathName={window.location.pathname.split("/")[1]}
          name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />

        <Flex>
          <Img />
        </Flex>
      </Container>
    </section>
  );
};

export default SingleProduct;
