import { DownArrowSVG } from 'assets/images/down-arrow'
import { Img } from 'components/Img'
import { Text } from 'components/Text'
import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    return (
        <div className="flex flex-col items-center justify-start mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full h-screen md:h-full">
                <div className="flex flex-row items-center justify-between w-full px-[3.75rem] md:px-[1px] pt-[2.75rem]">
                    <Img className="h-6 md:h-4" src="images/img_group.svg" alt="group" />

                    <Link to={'/'} className="border border-gray-900 border-solid cursor-pointer font-semibold min-w-[130px] py-[15px] md:min-w-[100px] md:py-[8px] md:text-sm rounded-[600px] text-center text-gray-900 text-lg  uppercase hover:bg-yellow-600 hover:border-yellow-600">
                        Sign In
                    </Link>
                </div>
                <div className="flex md:flex-col flex-row items-start justify-between w-full mt-[10rem] md:mt-0">
                    <div className="flex flex-col items-start justify-start w-[50rem] md:w-full mt-[6.5rem] ml-[7.00rem] mr-[3rem] md:mx-[0px]">
                        <Text
                            className="leading-[60px] text-[2.6875rem] font-[400] text-[#0B103] tracking-[-1px] w-full"
                            size="txtJostRomanRegular50"
                        >
                            Our mission is to help you reduce carbon emissions by using
                            our app, because you can earn rewards.
                        </Text>
                        <Link to={'/'} className="bg-yellow-600 border border-solid border-yellow-600 cursor-pointer font-medium mt-[5.9375rem] md:mt-[2.5rem] py-[17px] rounded-[30px] text-center text-gray-900_01 text-lg uppercase w-[184px] hover:bg-white-A700">
                            know more
                        </Link>
                    </div>
                    <div className="flex flex-col w-[70rem] md:hidden justify-start">
                        <div className="relative w-full h-full">
                            <Img
                                className="w-full lg:min-h-[26.6875rem] object-cover"
                                src="images/bottle.png"
                                alt="bottle"
                            />
                        </div>
                    </div>
                </div>
                <DownArrowSVG className="mt-[4.8125rem] md:hidden" />
            </div>
        </div>
    )
}

export default Intro