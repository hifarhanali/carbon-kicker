import { Img } from 'components/Img'
import SubscribeForm from 'components/SubscribeForm'
import { Text } from 'components/Text'
import React from 'react'

const Subscribe = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full md:hidden">
            <div className="relative flex flex-col justify-center items-center w-full">
                <div className="font-jost md:h-[575px] h-[594px] md:px-5 relative w-full mt-[6.5rem]">
                    <div className="md:h-[575px] h-[594px] m-auto w-full">
                        <div className="absolute h-[575px] inset-[0] justify-center m-auto w-full">
                            <Img
                                className="absolute bottom-[9%] lg:min-h-[25.1875rem] inset-x-[0] mx-auto object-cover md:w-full"
                                src="images/img_group_gray_900.png"
                                alt="group_One"
                            />
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[17%]">
                            <Img
                                className="min-h-[37.1875rem] w-full m-auto object-cover rounded-[46.264px]"
                                src="images/smartphone.png"
                                alt="019carbonkicke"
                            />
                        </div>
                    </div>
                </div>
                <Text
                    className="leading-[32.00px] mt-[1.625rem] text-center text-gray-900 text-[20px] text-xl tracking-[-0.40px] w-[42%] sm:w-full"
                    size="txtWorkSansRomanRegular20"
                >
                    Join the movement and use our app to calculate and track your
                    daily emissions. By taking steps to reduce them, you can earn
                    special rewards! Enter your email below to receive a
                    notification when we launch.
                </Text>

                <div className="mt-[3.5rem]">
                    <SubscribeForm />
                </div>
                <Img
                    className="w-[17.625rem] md:h-auto md:mt-0 mt-1.5 object-cover absolute left-40 -bottom-12 md:hidden"
                    src="images/leaf_1.png"
                    alt="leaf001motionbl"
                />
            </div>
        </div>
    )
}

export default Subscribe