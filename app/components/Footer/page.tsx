"use client"

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GoHeartFill } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full h-40 flex flex-col items-start justify-center max-w-5xl px-5 xl:max-w-7xl text-base"
    >
      <div className="w-full h-full bg-white dark:bg-raisin-black rounded-3xl flex items-center justify-between px-10">
        <div className="flex flex-col items-start opacity-50 max-w-[50%] lg:max-w-fit">
          <p>@ 2024 Ariel Navarro ( translation )</p>
          <p className="items-center gap-2 hidden lg:flex">
            Made with much love
            <GoHeartFill />
          </p>
        </div>
        <div className="flex flex-col-reverse gap-3 items-end">
          <p className="opacity-50 hidden lg:flex">( translation )</p>
          <div className="flex items-center gap-2 text-xl">
            <a
              className="flex items-center font-medium"
              href=""
              title="Email me"
            >
              <MdAlternateEmail />
            </a>
            <a
              className="flex items-center font-medium"
              href="https://www.linkedin.com/in/erickvpomie/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
