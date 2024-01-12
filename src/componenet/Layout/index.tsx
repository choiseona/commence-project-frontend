import { useState } from "react";
import Menu from "../Menu";
import { Outlet } from "react-router-dom";
import Overlay from "../Overlay";

const Layout = () => {
  const [onMenu, setOnMenu] = useState(false);
  const onClick = () => {
    setOnMenu((prev) => !prev);
    console.log(onMenu);
  };
  return (
    <div className="mt-[60px]">
      <nav className="fixed top-0 max-w-lg w-full bg-white h-[60px] z-10">
        <div className="h-full w-full flex justify-center items-center relative">
          <span className="text-[2em]">COMMENCE</span>
          <span onClick={onClick} className="absolute right-[30px]">
            <svg
              width="30"
              height="30"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="29" height="29" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_1_435"
                    transform="scale(0.00195312)"
                  />
                </pattern>
                <image
                  id="image0_1_435"
                  width="512"
                  height="512"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </span>
          {onMenu ? <Menu/> : null}
        </div>
      </nav>
      {onMenu ? <Overlay /> : null}
      <Outlet />
    </div>
  );
};

export default Layout;
