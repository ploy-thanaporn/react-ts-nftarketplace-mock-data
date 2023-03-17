import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import logo from "../assets/logo.svg";
import { navLink } from "../data/nav";

const Footer = () => {
  return (
    <div className="bg-[#07111E] w-full h-[400px] md:h-[557px] lg:h-[375px]">
      <div className="lg:py-[86px] lg:px-[146px]">
        <div className="w-full h-[203px]">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div>
                <p className="text-[#E8F0F9] text-16 md:text-33">
                  Following now
                </p>
                <p className="text-neutral-200 text-10 md:text-nav md:mt-2 lg:max-w-[280px]">
                  Join now with Wetxn to get the latest news about NFTs
                </p>
              </div>
              <div className="my-2 pr-2">
                <div className="flex items-center">
                  <p className="text-neutral-50 text-14 md:text-16 md:mt-2 lg:text-14">
                    Enter Your email
                  </p>
                  <div className="ml-[146px] md:ml-[488px] lg:ml-[152px]">
                    <button className="w-[96px] h-[36px] md:w-[114px] md:h-[44px] bg-[#255495] text-14 text-white font-semibold rounded-md">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="w-[288px] h-[1px] md:w-[630px] lg:w-[288px] text-neutral-50 bg-slate-100"></div>
              </div>
            </div>
            <div className="flex mt-4 px-9 lg:px-0 lg:text-left">
              {navLink
                .map((nav) => (
                  <div className="mx-auto lg:pr-20 lg:mx-0" key={nav.key}>
                    <p className="text-primary font-semibold text-19 md:text-23">
                      {nav.name}
                    </p>
                    <ul className="mt-6">
                      {nav.subnav.map((sub) => (
                        <li
                          className="mt-6 lg:mt-5 text-neutral-50 text-twelve md:text-sm"
                          key={sub.id}
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
                .slice(0, 3)}
            </div>
            <div className="flex flex-row lg:flex-col items-center">
              <div>
                <img
                  src={logo}
                  alt=""
                  className="w-[104.52px] h-[39.92px] md:w-[250.64px] md:h-[95.74px] lg:w-[207.33px] lg:h-[76.75px]"
                />
              </div>
              <div className="flex flex-col lg:flex-col-reverse">
                <div className="flex justify-end lg:justify-start mt-6 pr-1 mb-4 md:mb-9">
                  <div className="bg-neutral-100 rounded-full w-[15.5px] h-[16.01px] md:w-[37.16px] md:h-[38.4px] lg:w-[29.89px] lg:h-[28.59px] flex justify-center items-center">
                    <AiFillYoutube
                      color="#848080"
                      className="w-2.5 h-2.5 md:w-6 md:h-6 lg:w-5 lg:h-5"
                    />
                  </div>
                  <div className="bg-neutral-100 rounded-full w-[15.5px] h-[16.01px] md:w-[37.16px] md:h-[38.4px] lg:w-[29.89px] lg:h-[28.59px] flex justify-center items-center mx-2.5 md:mx-5 lg:mx-4">
                    <AiOutlineTwitter
                      color="#848080"
                      className="w-2.5 h-2.5 md:w-6 md:h-6 lg:w-5 lg:h-5"
                    />
                  </div>
                  <div className="bg-neutral-100 rounded-full w-[15.5px] h-[16.01px] md:w-[37.16px] md:h-[38.4px] lg:w-[29.89px] lg:h-[28.59px] flex justify-center items-center">
                    <GrFacebookOption
                      color="#848080"
                      className="w-2.5 h-2.5 md:w-5 md:h-5 lg:w-5 lg:h-5"
                    />
                  </div>
                </div>
                <div className="text-neutral-300 text-4 md:text-tenFooter flex justify-end mt-2 lg:max-w-[220px] pr-1">
                  <p>© 2021 - 2022 20Scoops NFT. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
