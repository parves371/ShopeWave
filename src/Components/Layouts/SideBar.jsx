import React from "react";

import SideBarHeadding from "./SideBarHeadding";
import { category,colors,brands,price } from "../../fakeData/Data";

const SideBar = () => {
  return (
    <div className="w-[373px] flex gap-[53px] flex-col mt-[130px] ">
      <SideBarHeadding title={"Shop by Category"}  data={category}/>
      <SideBarHeadding title={"Shop by Color"} showDrope={true} data={colors}/>
      <SideBarHeadding title={"Shop by Brand"} showDrope={true} data={brands}/>
      <SideBarHeadding title={"Shop by Price"} data={price}/>
    </div>
  );
};

export default SideBar;
