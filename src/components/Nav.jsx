import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".hover-links");
    const menuBackdrop = document.getElementById("menu-backdrop");

    listItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        menuBackdrop.style.setProperty("--left", `${item.offsetLeft}px`);
        menuBackdrop.style.setProperty("--top", `${item.offsetTop}px`);
        menuBackdrop.style.setProperty("--width", `${item.offsetWidth}px`);
        menuBackdrop.style.setProperty("--height", `${item.offsetHeight}px`);
        menuBackdrop.style.opacity = 1;
      });

      item.addEventListener("mouseleave", () => {
        menuBackdrop.style.opacity = 0;
      });
    });
  }, []);

  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="relative flex justify-between items-center max-container ">
        <a href="/" className="flex flex-grow basis-0">
          <img src={headerLogo} alt="logo" />
        </a>
        <ul className="flex justify-center items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover-links md:py-3 lg:px-3 xl:px-6"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 flex-grow basis-0 justify-end items-center">
          <a href="/" className="hover-links md:py-2 lg:px-2 xl:px-6">
            Sign in
          </a>
          <span className="text-slate-gray">/</span>
          <a href="/" className="hover-links md:py-2 lg:px-2 xl:px-6">
            Explore now
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            className="cursor-pointer"
            width={25}
            height={25}
          />
        </div>
        <div
          id="menu-backdrop"
          className={`
            absolute bg-black/5 backdrop-blur-lg rounded 
            left-[var(--left)] top-[var(--top)]
            w-[var(--width)] h-[var(--height)]
            transition-all duration-300
            ease-in-out -z-10 opacity-0           
            `}
        ></div>
      </nav>
    </header>
  );
};

export default Nav;
