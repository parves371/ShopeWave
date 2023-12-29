import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Product from "./Product";
import Flex from "./Flex";

const Paigination = ({ itemsPerPage, data }) => {
  const items = data;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product, index) => (
            <Product
              link={`/product/${product.id}`}
              key={product.id}
              showBage={true}
              bageName={product.brand}
              productImg={product.thumbnail}
              productName={product.title}
              price={`$ ${product.price}`}
              className={"w-[31%]"}
              imgClassName={"h-[370px]"}
            />
          ))}
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    setLastPage(event.selected);
    // console.log(itemOffset);
  };
  console.log();

  return (
    <>
      <Flex
        className={"gap-x-10 justify-center  flex-wrap gap-y-[50px] mt-[60px]"}
      >
        <Items currentItems={currentItems} />
      </Flex>
      <ReactPaginate
        className="flex gap-x-4 mt-[50px] relative items-center font-dm "
        pageLinkClassName="py-2 px-[14px] border border=[#F0F0F0] inline-block"
        activeClassName="bg-[#262626] text-[#D2D2D2]"
        breakLabel="..."
        nextLabel={`Products from ${itemOffset === 0 ? 1 : itemOffset} to ${
          lastPage === pageCount - 1 ? items.length : endOffset
        } of ${items.length}`}
        nextClassName="absolute right-0 bottom-0 text-[#767676] text-sm font-normal"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paigination;
