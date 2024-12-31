import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import userIcon from "../assets/user.svg";
import logo from "../assets/nexusBlackLogo.png"

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu = () => {
    setmenuOpened(!menuOpened);
  };

  return (
    <header className="max-padd-container fixed top-4 w-full left-0 right-0 z-50">
      {/* Container */}
      <div className="max-padd-container bg-white transition-all duration-200 rounded-full px-5 ring-1 ring-slate-900/5">
        <div className="flexBetween py-2" >
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="" width={100}/>
          </Link>
          {/* NavLinks */}
          <div>
            {/* DeskTop */}
            <NavLinks
              containerStyle={
                "hidden xl:flexCenter gap-x-5 xl:gap-x-10 capitalize medium-15 ring-1 ring-slate-900/10 rounded-full p-2 bg-primary"
              }
            />
            {/* Mobile */}
            <NavLinks
              containerStyle={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 lg:right-[48px] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 "
                  : "flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-secondary"
              />
            )}
            <button className="btn-secondary flexCenter gap-x-2 medium-16 rounded-full ">
              <img src={userIcon} alt="" height={22} width={22} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
