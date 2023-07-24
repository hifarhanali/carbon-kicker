import { Img } from 'components/Img'
import SubscribeForm from 'components/SubscribeForm'
import { Text } from 'components/Text'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="mx-auto w-full relative">
            <p
                className={`font-jost text-center text-[40px] font-[400] uppercase leading-[60px] tracking-[0.25em] text-[#0B103D] mt-[12.5rem] md:mt-[6.5rem]`}
            >
                join us
            </p>

            <div className="mx-auto w-full">
                <div className="flex flex-col items-center justify-start">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[33.65%] md:w-full">
                        <div className="flex flex-col items-center justify-center mb-[104px] w-full">
                            <Text
                                className="leading-[34.00px] text-center text-gray-900 tracking-[-0.40px] w-full mt-[4.0625rem] font-worksans text-[1.1rem] font-[400]"
                                size="txtWorkSansRomanRegular20"
                            >
                                Track your carbon footprint, reduce emissions, and earn
                                rewards with our innovative app. Start your sustainable
                                journey today!
                            </Text>
                            <div className="bg-gray-50 flex flex-col font-jost gap-[25px] items-center justify-start mt-[4.375rem] px-[6.5rem] py-[4.75rem] md:px-10 sm:px-5 rounded-[40px] w-full">
                                <SubscribeForm />
                            </div>
                            <Img
                                className="absolute min-h-[41rem] left-[6.5%] object-cover top-[14rem] xl:top-[25rem] w-[32%] md:hidden"
                                src="images/astronaut.png"
                                alt="astronautOne"
                            />
                            <div className="flex flex-row font-jost gap-[34px] items-center justify-center mt-[4.0625rem] w-full">
                                <Text
                                    className="text-[1.5rem] text-gray-900 tracking-[-0.48px]"
                                    size="txtJostRomanRegular24"
                                >
                                    Be part
                                </Text>
                                <Link to={'/'} className="bg-gray-900 cursor-pointer font-[600] px-[3rem] py-[1.25rem] rounded-[600px] text-center text-[1.125rem] text-white-A700 uppercase hover:bg-white-A700 hover:text-gray-900 border-gray-900 border md:min-w-[100px] md:py-[1rem] md:text-sm ">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Img
                className="absolute h-[28.375rem] top-[-19rem] right-[0] md:hidden"
                src="images/leaf_4.png"
                alt="leaf002motionbl"
            />

            <div className="absolute inset-y-[0] my-auto pb-[168px] right-[0] w-[34%] sm:w-full md:hidden">
                <Img
                    className="absolute min-h-[60rem] inset-x-[0] mx-auto object-cover bottom-[0] w-full"
                    src="images/globe.png"
                    alt="globe"
                />
            </div>

        </div>

    )
}

export default Signup