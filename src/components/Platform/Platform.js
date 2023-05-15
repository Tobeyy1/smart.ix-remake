import React from "react";
import classes from "./Platform.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Platform = () => {
  const { t } = useTranslation(["Platform"]);
  return (
    <div className={classes.container} id="platform">
      <header className={classes.header}>
        <div>
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ delay: 0.2 }}
          >
            {t("SmartTech for a SmartLife")}.
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
        >
          {t("We are a Technology Leader in Smart Ecosystems")}. <br />{" "}
          {t("We Enable AI-based Intelligent Customer Experiences")}.
          <br /> {t("Simply the Best Smart-X Platform to Change Your Life")}.
        </motion.p>
      </header>
      <section className={classes.content}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.7 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className={classes.platform__card}
        >
          <h4>{t("Personalized Apps")}</h4>
          <motion.p>
            {t(
              "1 Single App/UI to Experience a Smart World. Visualize personalized smart experiences for your customers. Our Technology helps you to create & release new experiences that follow your required branding within no time"
            )}
            .
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.7 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className={classes.platform__card}
        >
          <h4>{t("Endless Integrations")}</h4>
          <p>
            {t(
              "Connect Everything with Anything by SmartApps. Integrate all Smart Devices, Apps & Services across industry boundaries and make them all work together. Break the Silos and Benefit by the existing Marketplace."
            )}
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className={classes.platform__card}
        >
          <h4>{t("Intelligent Automations")}</h4>
          <p>
            {t(
              "Realize unique Artificial Intelligence by our 'AI/ML as a Service' and create successful AI Products. Seamlessly analyse & learn from SmartEcosystems so that all service works together in an intelligent & proactive way"
            )}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Platform;
