import React, { useState } from "react";
import classes from "./NavBar.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation(["NavBar"]);
  const variants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { staggerChildren: 0.1, type: "tween" },
    },
    exit: { y: "-100%" },
  };

  const item = {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0 },
    whileHover: { opacity: 0.5 },
    exit: { x: "100%", opacity: 0 },
  };
  return (
    <div className={classes.container}>
      <a href="#platform" className={classes.name}>
        SMART.iX
      </a>
      <a href="#contact" className={classes.request__demo}>
        {t("requestdemo")}
      </a>

      <button
        className={classes.menu__cta}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <AnimatePresence mode="popLayout">
          {showMenu ? (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
            >
              {t("close")}
            </motion.div>
          ) : (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
            >
              {t("menu")}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {showMenu && (
          <nav>
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{
                type: "tween",
              }}
              className={classes.logo__container}
            >
              <img
                src="https://www.smart-ix.ai/images/logo/smart-ix-logo_white.svg"
                alt="smart.ix logo"
              />
            </motion.div>
            <motion.ul
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                type: "tween",
              }}
            >
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#platform"
              >
                {t("intro")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#platform"
              >
                {t("platform")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#technology"
              >
                {t("technology")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#about"
              >
                {t("company")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#blog"
              >
                {t("blog")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#platform"
              >
                {t("APIs")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#platform"
              >
                {t("login")}
              </motion.a>
              <motion.a
                variants={item}
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#contact"
                id={classes.request__demo}
              >
                {t("requestdemo")}
              </motion.a>
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
