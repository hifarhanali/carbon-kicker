import { Img } from 'components/Img'
import { Text } from 'components/Text'
import React from 'react'

export interface IPollOption {
    id: string
    text: string
}

export interface IPollQuestion {
    question: string
    options: IPollOption[]
}



export interface IPollQuestionProps {
    question: IPollQuestion,
    className?: string,
    onNext?: () => void
}



const PollQuestion: React.FC<IPollQuestionProps> = ({ question, className = "", onNext = () => { } }) => {
    return (
        <div className={`flex flex-col items-start justify-start w-[29.5rem] md:w-full ml-[5.5625rem] md:ml-0 ${className}`}>
            <Text
                className="leading-[38.00px] sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-[92%] sm:w-full"
                size="txtJostRomanMedium28"
            >
                {question.question}
            </Text>
            {
                question.options.map((option, index) => (
                    <div key={index}
                        className="option border border-solid border-yellow-600 flex flex-row items-center justify-start mt-[1.5625rem] p-[23px] sm:px-5 rounded-[22px] w-full hover:bg-yellow-600 cursor-default"
                        onClick={onNext}
                    >
                        <Text
                            className="bg-orange-50 flex h-[52px] items-center justify-center ml-[17px] rounded-[50%] text-center text-gray-900 text-xl tracking-[-0.40px] w-[52px]"
                            size="txtJostRomanRegular20"
                        >
                            {option.id}
                        </Text>
                        <Text
                            className="sm:text-2xl md:text-[1.25rem] text-[28px] text-gray-900 tracking-[-0.56px] ml-[2.5rem] md:ml-[1.5rem]"
                            size="txtJostRomanRegular28"
                        >
                            {option.text}
                        </Text>
                    </div>
                ))
            }
        </div>
    )
}

export default PollQuestion