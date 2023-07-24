import { Text } from 'components/Text'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-start w-full">
            <Text
                className="absolute bottom-[1.25rem] text-center text-gray-900 text-sm tracking-[-0.28px]"
                size="txtWorkSansRomanRegular14"
            >
                CarbonKicker - copyright © 2023
            </Text>
        </div>
    )
}

export default Footer