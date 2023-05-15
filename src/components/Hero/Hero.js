import React from "react";
import classes from "./Hero.module.scss";
import NavBar from "../NavBar/NavBar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const h1initial = {
    y: "100%",
  };
  const h1animate = {
    y: "0%",
  };

  const { t } = useTranslation(["Hero"]);

  return (
    <div className={classes.container} id="home">
      <NavBar />
      <header className={classes.header}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {t("theleadingsmarttechtoconnectanything")},
          <br /> {t("learnadapt&automatetoyoursmartxdomains")}
          <br /> {t("byartificialintelligenceforasmartedlifestyle")}
        </motion.p>
        <section>
          <div>
            <div>
              <motion.h1
                initial={h1initial}
                animate={h1animate}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
              >
                {t("asmarterlife")}
              </motion.h1>
            </div>
            <div>
              <motion.h1
                initial={h1initial}
                animate={h1animate}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                }}
              >
                {t("byconnectingand")}
              </motion.h1>
            </div>
            <div>
              <motion.h1
                initial={h1initial}
                animate={h1animate}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
              >
                {t("automatingyourworld")}
              </motion.h1>
            </div>
          </div>

          <div className={classes.cta__container}>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={classes.watch__video}
            >
              <span className={classes.cta__text}>{t("watchvideo")}</span>
              <span className="material-symbols-rounded">north_east</span>
            </motion.button>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Hero;
