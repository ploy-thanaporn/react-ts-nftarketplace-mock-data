import { useState } from "react";
import TextAnimation from "./TextAnimation";
import logo from "../assets/logo.svg";
import imgAni from "../assets/img-animation.svg";
import img from "../assets/icons/img.svg";
import hammer from "../assets/icons/hammer.svg";
import person from "../assets/icons/person.svg";
import artist from "../assets/icons/artist.svg";

const Cover = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="relative h-[26em] md:h-[32rem] lg:h-screen 2xl:h-screen">
      <div className="w-full bg-red-100 h-[26rem] md:h-[32rem] lg:h-screen 2xl:h-screen absolute z-0"></div>
      <div className="w-full bg-white h-[26rem] md:h-[32rem] lg:h-screen 2xl:h-screen absolute opacity-50 z-10"></div>
      <div className="w-full absolute z-20">
        <div className="lg:flex">
          <div className="pt-12 px-5 my-14 md:my-24 lg:ml-36 lg:my-40 2xl:my-52 2xl:ml-80">
            <img
              src={logo}
              alt="logo"
              className="hidden lg:block w-[124px] h-[52px] 2xl:w-[190px] -ml-2.5 my-1"
            />
            <div className="flex justify-center items-center lg:justify-start">
              <div className="flex items-center text-28 md:text-34 lg:text-48 2xl:text-7xl font-extrabold text-neutral-900">
                Discover
                <div className="pl-2 lg:pl-3 2xl:pl-5">
                  <TextAnimation />
                </div>
              </div>
            </div>
            <p className="text-28 font-extrabold md:text-34 lg:text-48 2xl:text-7xl md:mt-3 md:mb-5 text-neutral-900 text-center lg:text-left">
              sell Extraordinay NFTs
            </p>
            <div className="flex justify-center max-w-full mt-2 md:mt-2 lg:justify-start">
              <p className="text-sm md:text-19 lg:text-20 2xl:text-2xl text-center text-neutral-700 max-w-md 2xl:max-w-2xl lg:text-left">
                Buy and sell NFTs from the world's top artist on the 20Scoops
                NFT platform.
              </p>
            </div>

            <div className="my-8 flex items-center justify-between max-w-md md:mx-auto lg:mx-0 lg:max-w-xl lg:my-5 2xl:max-w-2xl">
              <div className="flex items-center">
                <img
                  src={img}
                  alt=""
                  className="w-4 md:w-5 lg:w-[30px] 2xl:w-11"
                />
                <div className="mx-2 flex-col text-center items-center min-w-fit">
                  <p className="text-12 md:text-16 lg:text-19 2xl:text-xl font-semibold text-neutral-700">
                    320k+
                  </p>
                  <span className="text-10 2xl:text-base text-neutral-700">
                    Art works
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={hammer}
                  alt=""
                  className="w-4 md:w-5 lg:w-[30px] 2xl:w-11"
                />
                <div className="mx-2 flex-col text-center items-center min-w-fit">
                  <p className="text-12 md:text-16 lg:text-19 2xl:text-xl font-semibold text-neutral-700">
                    200k+
                  </p>
                  <span className="text-10 2xl:text-base text-neutral-700">
                    Auctions
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={person}
                  alt=""
                  className="w-4 md:w-5 lg:w-[30px] 2xl:w-11"
                />
                <div className="mx-2 flex-col text-center items-center min-w-fit">
                  <p className="text-12 md:text-16 lg:text-19 2xl:text-xl font-semibold text-neutral-700">
                    120k+
                  </p>
                  <span className="text-10 2xl:text-base text-neutral-700">
                    Auctions
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={artist}
                  alt=""
                  className="w-4 md:w-5 lg:w-[30px] 2xl:w-11"
                />
                <div className="mx-2 flex-col text-center items-center min-w-fit">
                  <p className="text-12 md:text-16 lg:text-19 2xl:text-xl font-semibold text-neutral-700">
                    220k+
                  </p>
                  <span className="text-10 2xl:text-base text-neutral-700">
                    Artists
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`hidden lg:block lg:mt-32 2xl:mt-48 transition-all ease-in-out duration-1000 ${
              hovering ? "skew-x-12" : ""
            }`}
          >
            <img
              src={imgAni}
              alt=""
              className="w-[527px] h-[508px] ml-16 mt-4.5 2xl:mr-6 2xl:w-[627px] 2xl:h-[608px] -skew-x-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
