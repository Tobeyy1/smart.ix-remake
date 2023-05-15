import React, { useRef, useState } from "react";
import classes from "./HowWeWork.module.scss";
import HowWeWorkCard from "./HowWeWorkCard";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";

const HowWeWork = () => {
  const [progress, setProgress] = useState(0);
  const headerRef = useRef(null);
  const { t } = useTranslation(["HowWeWork"]);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start center", "start start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    setProgress(latest);
  });

  const cardData = [
    {
      header: `${t("Customer UseCases")}`,
      body: `${t(
        "We empower you to focus on your user-centric brand and product philosophy by our Customer Driven Development. Creation of customer-centric use-cases and usage scenarios for innovative smart x, smart living or IoT products and solutions."
      )}`,
    },
    {
      header: `${t("Experiencable Products")}`,
      body: `${t(
        "We create value from the beginning by our evolutionary agile product increment approach. Transformation of use-cases into joint product development for rapid innovation by shippable product increments."
      )}`,
    },
    {
      header: `${t("Agile Projects")}`,
      body: `${t(
        "We realize Use-Cases on our platform in agile projects with a clear focus on enabling scalable products. We enable you to make use of previous product increments by truly agile projects. We help you avoid waste and say goodbye to click-dummies."
      )}`,
    },
    {
      header: `${t("Scalable Solution")}`,
      body: `${t(
        "We transform Ideas & Use-Cases by agile projects into scalable, SaaS enabled solutions by leveraging our all-in-one technology. You become production-grade by ensured security tests, load checks and field tests to confidently gain a highly scalable solution."
      )}`,
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <header ref={headerRef}>
          <AnimatePresence>
            {progress > 0.24 && (
              <motion.h2
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                {t("How We Work")}
              </motion.h2>
            )}
          </AnimatePresence>
        </header>
        {cardData.map((card, index) => (
          <HowWeWorkCard
            index={index + 1}
            key={index}
            header={card.header}
            body={card.body}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
