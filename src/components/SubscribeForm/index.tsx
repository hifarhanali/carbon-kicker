import { useState, useEffect, useRef } from 'react';
import { Input } from 'components/Input';
import { Text } from 'components/Text';
import { Link } from 'react-router-dom';

const SubscribeForm = () => {
    const [placeholderWidth, setPlaceholderWidth] = useState('auto');
    const inputRef = useRef(null);

    useEffect(() => {
        // Calculate the width of the placeholder text and set the input width
        if (inputRef.current) {
            const placeholderText = inputRef.current.placeholder;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            context.font = getComputedStyle(inputRef.current).font;
            const width = context.measureText(placeholderText).width;
            setPlaceholderWidth(width / 16 + (window.innerWidth > 768 ? 10 : 5) + 'rem');
        }
    }, []);

    return (
        <div className="flex flex-col gap-[25px] items-center justify-center">
            <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px]"
                size="txtJostRomanMedium24"
            >
                Stay informed. Sign up now!
            </Text>
            <div className="flex flex-col gap-[25px] items-center justify-center w-full">
                <Input
                    name="groupSix"
                    placeholder="Enter Your Email or Phone Number"
                    className="font-worksans p-0 placeholder:text-gray-900_87 text-center text-gray-900_87 text-lg md:text-sm w-auto placeholder-opacity-0"
                    wrapClassName="border border-gray-900 border-solid py-[1.1875rem] rounded-[3.125rem] w-full"
                    type="email"
                    style={{ width: placeholderWidth }} // Set the input width dynamically based on the placeholder text
                    ref={inputRef}
                />
                <Link to={'/'}
                    className="bg-yellow-600 border border-solid border-yellow-600 cursor-pointer font-jost font-medium h-[3.875rem] py-[1.0625rem] rounded-[1.875rem] text-center text-gray-900_01 text-lg uppercase w-[10.375rem] hover:bg-white-A700">
                    Subscribe
                </Link>
            </div>
        </div>
    );
};

export default SubscribeForm;
