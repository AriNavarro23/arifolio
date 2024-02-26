import React from "react";
import { useThemeStore } from "@/app/share/store/useThemeStore/page";
import { FaMoon, FaSun } from "react-icons/fa";
import { GrCloudDownload } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";
import { useTranslateStore } from "@/app/share/store/useTranslateStore/page";
import Link from "next/link";

export default function Header() {
  const toggleTheme = useThemeStore(state => state.toggleTheme);
  const theme = useThemeStore(state => state.theme);
  const setShowTranslateToggle = useTranslateStore(
    (state) => state.setShowTranslateToggle
  );

  return (
    <header className="w-full overflow-x-hidden h-[5rem] flex justify-center dark:bg-dusky bg-opacity-70 dark:bg-opacity-70 fixed top-0 left-0 z-10 backdrop-blur-lg subpixel-antialiased">
      <nav className="w-full h-full flex items-center justify-between py-1 px-5 max-w-5xl xl:max-w-7xl">
        <div className="w-7 h-7 bg-dusky flex items-center justify-center dark:bg-moonlit p-4">
          <span className="text-moonlit text-md font-semibold dark:text-dusky">
            AN
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            title="Translate"
            className="text-xl"
            onClick={() => setShowTranslateToggle(true)}
          >
            <LuLanguages />
          </button>
          {theme === "light" ? (
            <button 
              title='Switch to dark theme' 
              onClick={() => toggleTheme()}
            >
              <FaMoon className="w-6 h-6 fill-current text-[#2f3133] active:rotate-[360deg] transition-all duration-300" />
            </button>
          ) : (
            <button 
              title='Switch to white theme' 
              onClick={() => toggleTheme("light")}
            >
              <FaSun className="w-6 h-6 fill-current text-sun-beam active:rotate-[360deg] transition-all duration-300" />
            </button>
          )}
          <Link
            className="w-auto h-7 px-4 font-medium flex items-center gap-2 bg-dusky text-moonlit rounded-3xl dark:text-dusky dark:bg-moonlit lg:h-10 lg:px-6 cursor-pointer active:scale-[1.1] transition-all duration-300"
            href="https://drive.google.com/file/d/151lwCETPShntSduJmXZSxe7ZaQ09gF1v/view?usp=sharing"
          >
            <GrCloudDownload />
            <div className="flex items-center">
              <span className="hidden lg:flex">Download &nbsp;</span>
              <span>CV</span>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
