import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import Flex from "./Flex";
import SideBarData from "./SideBarData";

const SideBarHeadding = ({ title, showDrope, data }) => {
  const [showDropeDown, setShowDropeDown] = useState(true);
  return (
    <div>
      {showDrope ? (
        <div>
          <div
            onClick={() => {
              setShowDropeDown(!showDropeDown);
            }}
          >
            <Flex
              className={"items-center justify-between pb-5 cursor-pointer"}
            >
              <h6 className="text-dm text-[#262626] text-xl font-bold ">
                {" "}
                {title}
              </h6>
              <div>{showDropeDown ? <FaAngleUp /> : <FaAngleDown />}</div>
            </Flex>
          </div>
          {showDropeDown &&
            data.map((value, index) => (
              <SideBarData
                key={index}
                tittle={value.name}
                color={value.hasOwnProperty("colorCode") && value.colorCode}
              ></SideBarData>
            ))}
        </div>
      ) : (
        <div>
          <h6 className="text-dm text-[#262626] text-xl font-bold pb-5">
            {title}
          </h6>
          {data.map((value, index) => (
            // console.log(index)
            <SideBarData
              key={index}
              tittle={value.name}
              showDropData={value.hasOwnProperty("subCategory") ? true : false}
            >
              {value.hasOwnProperty("subCategory") &&
                value.subCategory.map((value) => (
                  <div className="text-[#767676] text-base font-normal font-dm border-b border-[#F0F0F0] pb-5 mt-5">
                    {value.name}
                  </div>
                ))}
            </SideBarData>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarHeadding;
