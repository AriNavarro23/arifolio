"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@uidotdev/usehooks";

import { MdAlternateEmail, MdAutoGraph } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header/page";



import FotoPerfil from "../assets/Foto perfil.jpg";
import Footer from "./components/Footer/page";
import Image from "next/image";
import useDevice from "./custom/device/page";
import dynamic from "next/dynamic";
import { ICardProject, IExpCard } from "./share/interface/page";
import { Experiences, Projects } from "./share/utils/globals/page";
import ProjectCards from "./components/ProjectCards/page";
import InfinityScroll from "./components/infinityScroll/page";
import ExperienceCard from "./components/ExpCard/page";
import { switchLang } from "./share/utils/translate/page";
import { useTranslateStore } from "./share/store/useTranslate/page";


export default function Home() {

  const showTranslateToggle = useTranslateStore(
    (state) => state.showTranslateToggle);

  const setShowTranslateToggle = useTranslateStore(
    (state) => state.setShowTranslateToggle);

  const handleTranslateToggle = () => {
    if (showTranslateToggle) {
      setShowTranslateToggle(false);
    }
  }
  


  return (
    <div 
      onClick={handleTranslateToggle}
      className="w-full bg-moonlit select-none text-midnight flex flex-col items-center subpixel-antialiased dark:bg-dusky dark:text-noon scroll-smooth gap-5 lg:gap-10 mb-10"
      >
      <div className="w-full flex items-center justify-center mt-16 lg:mt-[3rem] fixed z-20">
        
        <div className="w-full h-full relative max-w-5xl px-5 xl:max-w-7xl">
          <div className="w-auto h-auto absolute flex flex-col gap-2 px-5 py-4 -top-1 z-20 right-36 lg:right-[15rem] lg:top-4 bg-white dark:bg-raisin-black rounded-xl">
            <button
              title="English"
              className="text-sm font-medium cursor-pointer"
              onClick={() => switchLang("en")}  
            >
              English
            </button>
            <button 
              title="Spanish"
              className="text-sm font-medium cursor-pointer"
              onClick={() => switchLang("es")}
            >
            </button>
          </div>
        </div>

      </div>
      <Header />
      <main className="w-full flex flex-col gap-10 items-center max-w-5xl px-5 xl:max-w-7xl mt-[5.5rem]">
        <section className="w-full grid auto-rows-[192px] grid-cols-6 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="row-span-2 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden gap-10 justify-end p-6 dark:bg-raisin-black xl:col-span-4 lg:items-end sm:flex-row  lg:p-10"
          >
            <div className="absolute bg-gradient-to-t from-dusky-alt to-transparent top-0 left-0 bottom-0 right-0 z-[2]" />
            <Image
              className="absolute w-full h-full object-cover left-0 top-0"
              src={FotoPerfil}
              alt="Foto Perfil"
            />
            <div className="w-full flex flex-col z-[2] absolute left-0 bottom-0 leading-4 p-5 text-moonlit">
              <span className="text-3xl font-bold leading-7">
                Ariel Navarro
              </span>
              <span className="text-lg font-medium leading-9">degree</span>
              <div className="flex flex-wrap items-center gap-2 mt-1 lg:gap-3">
                <a
                  className="flex items-center font-medium bg-moonlit px-3 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300"
                  href="https://github.com/AriNavarro23"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                  <span className="hidden lg:flex">GitHub</span>
                </a>
                <a
                  className="flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300"
                  href="https://www.linkedin.com/in/arinavarro/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                  <span className="hidden lg:flex">LinkedIn</span>
                </a>
                <a
                  className="flex items-center font-medium bg-moonlit px-4 py-2 rounded-lg text-dusky gap-2 active:scale-[1.1] transition-transform duration-300"
                  href="mailto:navarro.ari.dev@gmail.com"
                  title="Email"
                >
                  <MdAlternateEmail />
                  <span className="hidden lg:flex">Email</span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.3 }}
            viewport={{ once: true }}
            className="row-span-1 col-span-6 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 p-7 dark:bg-raisin-black xl:col-span-2 lg:p-10"
          >
            <h2 className="text-2xl font-bold z-[1]">
              title
            </h2>
            <p className="text-base w-full z-[1] opacity-70">
              description
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true }}
            className="row-span-1 col-span-3 rounded-3xl bg-white relative flex flex-col overflow-hidden border-2 border-transparent gap-2 items-center justify-center dark:bg-raisin-black xl:col-span-1"
          >
            <p className="text-7xl z-[1] font-bold flex items-center gap-1">
              <span>+</span>
             {/* <AnimatedCounter from={0} to={3} /> */}
            </p>
            <p className="text-sm font-semibold max-w-fit opacity-70 z-[1]">
              {/*experience title */}
            </p>
            <MdAutoGraph className="w-full h-full absolute -right-10 -bottom-12 opacity-5 dark:opacity-[0.02] p-5 z-[0]" />
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          viewport={{ once: true }}
          className='row-span-1 col-span-3 rounded-3xl bg-white dark:bg-raisin-black overflow-hidden border-2 border-transparent xl:col-span-1 flex items-center justify-center relative'
          >
            <Image
            	className='absolute w-full h-full object-cover z-[1]'
              src=''
              alt='Location'
              title='Location'
              width={100}
              height={100}
            />
            <Image
							className='w-11 z-[2]'
							src=''
							alt='memoji'
							title='memoji'
              width={100}
              height={100}
						/>
            <div className='w-24 h-24 bg-[#98d0ff] absolute z-[1] rounded-full bg-opacity-30 border-2 border-white animate__animated animate__pulse animate__infinite infinite animate__fast' />
            <motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='w-full h-10 backdrop-blur-sm absolute left-0 bottom-0 z-[2] flex items-center justify-center text-left text-opacity-70'
						>
							<span className='text-xs font-medium'>
								{/*location tiile*/} ARG
							</span>
						</motion.div>
          </motion.div>
        </section>
        <header className='w-full flex flex-col gap-2 text-center'>
        <motion.h1
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.3 }}
						viewport={{ once: true }}
						className='text-3xl font-semibold'
					>
            project title
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
            className='opacity-70'
          >
            project description
          </motion.p>
        </header>
        <section className='w-full grid auto-rows-[380px] lg:auto-rows-[140px] grid-cols-8 gap-4'>
          {Projects.map((project:ICardProject) =>{
            return <ProjectCards {...project} key={project.id} />
          })}
        </section>
        <header className='w-full flex flex-col gap-2 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            viewport={{ once: true }}
            className='text-3x1 font-semibold'
          >
            technologies title
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            viewport={{ once: true }}
            className='opacity-70'
          >
            technologies description
          </motion.p>
        </header>
        <section className='w-full h-40 max-w-5xl xl:max-w-7xl text-base'>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className='w-full h-full relative inline-flex flex-nowrap bg-white dark:bg-raisin-black rounded-3xl items-center justify-between px-10 overflow-hidden'
            >
              <div className='absolute left-0 w-28 h-full bg-gradient-to-r from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
              <div className='absolute right-0 w-28 h-full bg-gradient-to-l from-white to-transparent dark:from-raisin-black dark:to-transparent z-[1]' />
              <InfinityScroll />
          </motion.div>
        </section>
        <header className='w-full flex flex-col gap-2 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            viewport={{ once: true }}
            className='text-3x1 font-semibold'
          >
            experience title
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.3 }}
            viewport={{ once: true }}
            className='opacity-70'
          >
            experience description
          </motion.p>
        </header>
        <section className='w-full grid auto-rows-[260px] grid-cols-8 gap-4'>
          {Experiences.map((experience: IExpCard) => (
            <ExperienceCard {...experience} key={experience.id}/>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
