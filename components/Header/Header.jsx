"use client";
import { images } from "../../constants";
import Image from "next/image";
import { React, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Programmer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  let ref = useRef();
  const isMobile = useMediaQuery({ query: "(max-width: 767.98px)" });

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Always call the hooks
  let yIntroTransform = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  let yTerminalTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-25%"]
  );

  // Conditionally apply the values
  let yIntro = isMobile ? "0%" : yIntroTransform;
  let yTerminal = isMobile ? "0%" : yTerminalTransform;

  return (
    <header
      ref={ref}
      className="header mx-auto two-color-bg relative flex flex-col items-center h-screen"
    >
      <div className="container flex h-full">
        <div className="intro w-1/2 flex">
          <motion.div
            style={{ y: yIntro }}
            className="flex flex-col my-auto gap-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="info">
              <p className="hi mb-1 text-lg ">Hi 👋 I&apos;m</p>
              <p className="heading text-6xl font-semibold  uppercase">
                Ragib Al Asad
              </p>
              <p className="sub-heading  my-2">
                <span>I BUILD WEBSITES</span>
              </p>
            </div>
            <div className="social-links flex gap-6">
              <div className="links flex gap-4 text-2xl my-auto">
                <a href="https://facebook.com/ragibalasad" target="_blank">
                  <FaFacebook />
                </a>
                <a href="https://github.com/RagibAlAsad" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/RagibAlAsad" target="_blank">
                  <FaLinkedin />
                </a>
              </div>

              <a href="#" className="btn">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          style={{ y: yTerminal }}
          className="terminal w-1/2 flex justify-center items-end pb-12 z-10"
        >
          <motion.div
            className="terminal-win text-xs"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal-head flex shadow-sm p-2 gap-1">
              <div className="close"></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <div className="terminal-body px-6 my-4">
              <span className="text-xl">
                <span className="code-color-1">{"<div "}</span>
                <span className="code-color-2">class</span>
                <span className="code-color-4">=</span>
                <span className="code-color-3">&quot;aboutMe&quot;</span>
                <span className="code-color-1">{">"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<p> "}</span>
                <span className="code-color-4">I&apos;m a</span>
                <span className="code-color-1">{" </p>"}</span>
                <br />
                <span className="code-color-1 ml-4">{"<p> "}</span>
                <span className="code-color-4">{text}</span>
                <span className="code-color-2">
                  <Cursor cursorStyle="█" />
                </span>
                <span className="code-color-1">{"</p>"}</span>
                <br />
                <span className="code-color-1">{"</div>"}</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="showcase-img absolute bottom-0 mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="mx-auto"
          src={images.ragib_potrait}
          alt="Ragib Al Asad"
          height={610}
        />
      </motion.div>
    </header>
  );
};

export default Header;
