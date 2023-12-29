import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";

import Flex from "./Flex";

const SideBarData = ({ tittle, color, showDropData, children }) => {
  // const { showDropSubData, setshowDropSubData } = useState(true);
  const [showSubDropeDown, setShowSubDropeDown] = useState(false);

  return (
    <section>
      {showDropData ? (
        <div onClick={() => setShowSubDropeDown(!showSubDropeDown)}>
          <Flex className={"items-center justify-between cursor-pointer"}>
            {showSubDropeDown ? (
              <h4 className="text-[#767676] text-base font-bold font-dm border-b border-[#F0F0F0] pb-5 mt-5">
                {tittle}
              </h4>
            ) : (
              <h4 className="text-[#767676] text-base font-normal font-dm border-b border-[#F0F0F0] pb-5 mt-5">
                {tittle}
              </h4>
            )}
            {showSubDropeDown ? <FaMinus /> : <FiPlus />}
          </Flex>
        </div>
      ) : (
        <Flex className={"items-center gap-[10px]"}>
          {color && (
            <span
              style={{ background: color }}
              className={`w-3 h-3 rounded-full`}
            ></span>
          )}
          <div className="text-[#767676] text-base font-normal font-dm border-b border-[#F0F0F0] pb-5 mt-5 ">
            {tittle}
          </div>
        </Flex>
      )}
      {showSubDropeDown && children}
      <div></div>
    </section>
  );
};

export default SideBarData;
