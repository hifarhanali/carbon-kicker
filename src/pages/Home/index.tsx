import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import Subscribe from "components/sections/Subscribe";
import Poll from "components/sections/Poll";
import Intro from "components/sections/Intro";
import Signup from "components/sections/Signup";
import Footer from "components/sections/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 relative flex flex-col font-jost items-end justify-endw-full overflow-x-hidden sm:px-[1rem] md:px-[3rem]">
        <div className="flex flex-col items-center w-full">

          {/* SECTION 1 */}
          <Intro />


          {/* SECTION 2  */}
          <Subscribe />

        </div>

        {/* SECTION 3 */}
        <div className="relative w-full">
          <Poll />
        </div>


        {/* SECTION 4 */}
        <Signup />


        <Footer />

      </div>
    </>
  );
};

export default Home;
