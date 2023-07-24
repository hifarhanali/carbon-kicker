import { Img } from 'components/Img'
import { Line } from 'components/Line'
import PollQuestion, { IPollQuestion } from 'components/PollQuestion'
import { Text } from 'components/Text'
import React from 'react'



const questions: IPollQuestion[] = [
    {
        question: "What would you change first to reduce your carbon footprint?",
        options: [
            {
                id: "A",
                text: "Drive Less"
            },
            {
                id: "B",
                text: "Install Solar Panels"
            },
            {
                id: "C",
                text: "Change My Diet"
            },
        ]
    },
    {
        question: "What would you change second to reduce your carbon footprint?",
        options: [
            {
                id: "A",
                text: "Drive Less"
            },
            {
                id: "B",
                text: "Install Solar Panels"
            },
            {
                id: "C",
                text: "Change My Diet"
            },
        ]
    },
    {
        question: "What would you change thrid to reduce your carbon footprint?",
        options: [
            {
                id: "A",
                text: "Drive Less"
            },
            {
                id: "B",
                text: "Install Solar Panels"
            },
            {
                id: "C",
                text: "Change My Diet"
            },
        ]
    },
]


const Poll = () => {

    const [currentQuestion, setCurrentQuestion] = React.useState(0)

    const onNextQustion = () => {
        setCurrentQuestion(currentQuestion + 1 < questions.length ? currentQuestion + 1 : currentQuestion)
    }

    const progress = () => {
        const p = Math.ceil(parseFloat((((currentQuestion + 1) * 100) / questions.length).toString()))
        return p
    }

    return (
        <div className="w-full">
            <Text
                className="md:text-[24px] text-[40px] text-center text-gray-900 tracking-[10.00px] uppercase mt-[11.6875rem] md:mt-[6.5rem]"
                size="txtJostRomanRegular40"
            >
                Participate in Our Poll
            </Text>


            <div className="flex flex-col items-center justify-start mt-[4.375rem]">
                <Text
                    className="text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[-0.48px]"
                    size="txtJostRomanRegular24"
                >
                    Question {currentQuestion + 1} / {questions.length}
                </Text>
            </div>

            <div className=" md:w-full w-[60%] m-auto mt-[2.5rem] relative" >

                <div className="relative">
                    <Line className="bg-gray-300 h-[3px] m-auto w-full" />
                    <Line className={`absolute bg-gray-900 h-[3px] inset-y-[0] left-[0] my-auto w-[${progress()}%] w-${progress() >= 100 && "full"}`} />
                </div>

                <div className="flex flex-row md:flex-col items-center justify-center w-full mt-[5rem] px-[5rem] md:px-[5px]">
                    <div className="flex flex-row items-center flex-1 md:hidden">
                        <div className="relative w-[18.125rem]">
                            <Img
                                className="justify-center m-auto w-full"
                                src="images/smartphone_2.png"
                                alt="005carbonkicke"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row items-center flex-1">
                        <PollQuestion question={questions[currentQuestion]} onNext={onNextQustion} />
                    </div>
                </div>


                {/* BOTTOM LEFT LEAF */}
                <Img
                    className="absolute bottom-[-30%] left-[-14%] w-[18.4375rem] object-cover md:hidden"
                    src="images/leaf_3.png"
                    alt="leaf 3"
                />
            </div>
            <Img
                className="absolute w-[21rem] top-[10%] right-[4%] md:hidden"
                src="images/leaf_2.png"
                alt="leaf002motionbl"
            />

        </div>
    )
}

export default Poll