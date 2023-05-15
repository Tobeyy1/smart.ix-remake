import React, { useRef, useState } from "react";
import classes from "./Pricing.module.scss";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [progress, setProgress] = useState(0);
  const pricingContainerRef = useRef(null);
  const { t } = useTranslation(["Pricing"]);

  const { scrollYProgress } = useScroll({
    target: pricingContainerRef,
    offset: ["start end", "start center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    setProgress(latest);
  });

  return (
    <div className={classes.container} ref={pricingContainerRef}>
      <header className={classes.header}>
        <h2>{t("Pricing plans")}</h2>
      </header>
      <section className={classes.body}>
        <AnimatePresence>
          {progress === 1 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.top__bar}
            ></motion.div>
          )}
        </AnimatePresence>
        <p>
          {t("Whether you are a startup or a big company,")}
          <br /> {t("our pricing plans fit businesses of any sizes.")}
          <br />
          {t(
            "We offer flexible plans with no surprises because we're here to help you scale smartly."
          )}
        </p>
        <AnimatePresence>
          {progress === 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              exit={{ height: 0 }}
              className={classes.vertical__bar}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className={classes.free}>
          <h6>{t("Free Trial")}</h6>
          <div className={classes.pricing}>
            <h4 id={classes.amount}>0</h4>
            <span>€</span>
          </div>
          <span>{t("Per Month")}</span>
          <ul>
            <li>
              <span>1</span>
              {t("Dashboard/App")}
            </li>
            <li>
              <span>20</span> {t("Smartlets")}
            </li>
            <li>
              <span>5</span> {t("SmartApps")}
            </li>
            <li>
              <span>3</span> {t("Months Data History")}
            </li>
          </ul>

          <button className={classes.free__cta}>{t("Get In touch")}</button>
        </div>

        <AnimatePresence>
          {progress === 1 && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.5, delay: 0.33 }}
              exit={{ height: 0 }}
              className={classes.vertical__bar}
            ></motion.div>
          )}
        </AnimatePresence>
        <div className={classes.professional}>
          <h6>{t("Professional")}</h6>
          <div className={classes.pricing}>
            <h4 id={classes.amount}>{t("Pay-as-you-Grow")}</h4>
          </div>
          <ul>
            <li>
              <span>{t("Unlimited")}</span>
              {t("Dashboard/Apps")}
            </li>
            <li>
              <span>{t("Unlimited")}</span>
              {t("API Queries")}
            </li>
            <li>
              <span>{t("Unlimited")}</span>
              {t("SmartApps")}
            </li>
            <li>
              <span>{t("Volume")}</span>
              {t("Discount")}
            </li>
            <li>
              <span>{t("Custom")}</span>
              {t("Features")}
            </li>
          </ul>

          <button className={classes.professional__cta}>
            {t("Get In touch")}
          </button>
        </div>
        <AnimatePresence>
          {progress === 1 && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={classes.bottom__bar}
            ></motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Pricing;
