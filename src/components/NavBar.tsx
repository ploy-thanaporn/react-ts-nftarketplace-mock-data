import { navLink } from "../data/nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import walletMB from "../assets/walletMB.svg";
import wallet from "../assets/wallet.svg";
import logo from "../assets/logo.svg";
import Footer from "./Footer";

type PropType = {
  children: JSX.Element;
};
function Navbar({ children }: PropType) {
  const [open, setOpen] = useState(false);
  const openSidebar = () => setOpen(!open);

  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    open && !matches
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [open, matches]);

  return (
    <div className="h-screen">
      <nav className="w-full relative z-40 flex items-center drop-shadow h-[50px] md:h-[56px] lg:h-[90px]">
        <div className="flex justify-between items-center px-4  bg-white w-full h-full">
          <div className="flex flex-row-reverse lg:flex-row items-center">
            <Link to="/">
              <img
                src={logo}
                className="w-24 h-8 ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                alt="logo"
              />
            </Link>
            <div className="lg:border-l-[1.5px] lg:border-[#D9D9D9] order-2 lg:mx-2 h-12">
              <div className="hidden items-center order-3 lg:flex md:w-auto">
                <ul className="flex flex-col py-3 mx-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-nav">
                  {navLink.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="block pr-4 pl-3 text-black hover:border-b-2 hover:border-primary bg-transparent md:p-0"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div onClick={openSidebar} className="block lg:hidden z-10">
              {!open ? (
                <AiOutlineMenu className="w-6 h-6 cursor-pointer" />
              ) : (
                <AiOutlineClose className="w-6 h-6 cursor-pointer" />
              )}
            </div>
          </div>

          <div className="flex items-center">
            {/* wallet mobile & tablet */}
            <div>
              <img
                src={walletMB}
                alt=""
                className="block lg:hidden w-6 h-6 cursor-pointer"
              />
            </div>
            {/* wallet desktop */}
            <div className="hidden lg:flex items-center">
              <button
                type="button"
                className="flex items-center text-white text-16 font-semibold bg-primary focus:outline-none rounded-lg px-4 py-3 w-50 h-11 lg:mx-4"
              >
                <div className="flex items-center mx-1">
                  <img src={wallet} alt="" />
                  <span className="ml-2">Connect Wallet</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div
          className={
            !open
              ? "hidden"
              : "absolute z-40 h-[195vh] w-full bg-black opacity-20"
          }
          onClick={openSidebar}
        ></div>
        <div
          className={
            !open
              ? "hidden"
              : "absolute top-0 left-0 w-[310px] h-screen bg-white flex flex-col z-50 px-6 py-6"
          }
        >
          <div className="flex items-center">
            <AiOutlineClose className="w-6 h-6" onClick={openSidebar} />
            <img src={logo} alt="" className="w-[124px] h-[52px]" />
          </div>
          <ul>
            {navLink.map((item) => (
              <li
                className="py-3 text-16 text-neutral-600 hover:font-semibold hover:bg-[#FCF1F1] rounded-lg"
                key={item.key}
              >
                <Link to={item.path} className="flex items-center mx-3 py-1">
                  <div className="mr-3 w-4 h-4"> {item.icon}</div>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="min-h-[calc(100%-442.38px)] md:min-h-[calc(100%-591px)] lg:min-h-[calc(100%-474px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
