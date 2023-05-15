import React, { useState, useRef, useEffect } from "react";
import classes from "./LanguageModal.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const LanguageModal = () => {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const [activeState, setActiveState] = useState(false);
  const [initPlay, setInitPlay] = useState(false);
  const selectRef = useRef();

  const { i18n, t } = useTranslation(["LanguageModal"]);

  const languageHandler = (e) => {
    setCurrentLanguage(e.target.value);
    setActiveState(false);
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setActiveState(true);
      setTimeout(() => {
        setActiveState(false);
      }, 3000);
    }, 3000);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  });

  return (
    <div className={classes.container}>
      <label htmlFor="Language" className={classes.label}>
        {/* Earth Icon */}
        <span
          className="material-symbols-rounded"
          onClick={() => {
            setActiveState(!activeState);
          }}
        >
          language
        </span>
        <AnimatePresence>
          {activeState && (
            <>
              <motion.p
                initial={{ right: "200%", opacity: 0 }}
                animate={{ right: "110%", opacity: 1 }}
                exit={{ right: "200%", opacity: 0 }}
                className={classes.info}
              >
                {t("yourlanguageis")}{" "}
                {currentLanguage === "en"
                  ? "English"
                  : currentLanguage === "de"
                  ? "Deutsch"
                  : t("notspecified")}
                <span className="material-symbols-rounded">
                  arrow_right_alt
                </span>
              </motion.p>
              <motion.p
                initial={{ top: "200%", opacity: 0 }}
                animate={{ top: "125%", opacity: 1 }}
                exit={{ top: "200%", opacity: 0 }}
                className={classes.instruction}
              >
                {t("clicktochange")}
                <span class="material-symbols-rounded">north</span>
              </motion.p>
            </>
          )}
        </AnimatePresence>
        {activeState && (
          <div className={classes.select__container}>
            <select
              name="Language"
              title="Language"
              ref={selectRef}
              // value={currentLanguage}
              value={localStorage.getItem("i18nextLng")}
              onChange={languageHandler}
            >
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        )}
      </label>
      <AnimatePresence>
        {activeState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exi={{ opacity: 0 }}
            className={classes.backdrop}
            onClick={() => {
              setActiveState(false);
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageModal;
