import React from 'react'

const recoverfile = () => {
  return (
    <div>
        <Flex className={"font-dm py-8 justify-around items-center "}>
            <Flex className="w-[30%] gap-7 items-center">
              <RxCross2 className="text-[#262626]" />
              <Img src={Carting} className={"w-[100px] h-[100px]"} />
              <h3 className="font-bold text-base text-[#262626]">
                Product name
              </h3>
            </Flex>
            <div className="w-[20%] font-bold text-xl text-[#262626]">
              $44.00
            </div>
            <div className="w-[20%]">
              <Flex
                className={"w-[140px] border border-[#F0F0F0] justify-between"}
              >
                <button className="pl-5 py-4">
                  <FiMinus />
                </button>

                <input type="tel" className="w-10 outline-transparent pl-3" />
                <button className="pr-5 py-4">
                  <FiPlus />
                </button>
              </Flex>
            </div>
            <div className="w-[20%] font-bold text-xl text-[#262626]">
              $44.00
            </div>
          </Flex>
    </div>
  )
}

export default recoverfile