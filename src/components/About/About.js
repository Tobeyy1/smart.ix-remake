import React from "react";
import classes from "./About.module.scss";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["About"]);
  return (
    <div className={classes.container} id="about">
      <header className={classes.header}>
        <h2>{t("ABOUT US")}</h2>
      </header>
      <section className={classes.body}>
        <div>
          <h6>{t("Who we are:")}</h6>
          <p>
            {t(
              "A German-based startup which is a technology leader in Smart Ecosystems and enables AI-based intelligent customer experiences. The company offers Smart Technologies and “SmartLife AI-as-a-Service”-platform to enable companies to create winning smart X offerings regardless of technology interdependencies. SMART.iX seamlessly integrates, analyses and learns everything from smart infrastructure, smart energy, smart city, smart home up to smart services, letting any digital service work together in a context-sensitive, intelligent and predictive way to adapt to your smart lifestyle while creating a better, more intuitive user experience. With SMART.iX, industries can offer customized, interconnected and smarter solutions to their end-users and increase customer satisfaction."
            )}
          </p>
        </div>
        <div>
          <h6>{t("Our Vision:")}</h6>
          <p>
            {t(
              "To serve as the most useful SmartTech & AI provider of the 21st century and to bring novel innovations to market with our partners to protectively engage nature through smart solutions. We aim for a Connected Nature Ecosphere (Humans/Things/Nature) to accelerate user-centric, cutting-edge AI-based products to help humanity for the good."
            )}
          </p>
        </div>
        <div>
          <h6>{t("Our Mission:")} </h6>
          <p>
            {t(
              "To enable future generations to have a smarter life, through technology that is simple, powerful and works for humanity. We want to transform our planet into a smart ecosystem and preserve it for future generations. SMART.iX mission stands for the convergence of humans, things and nature into a Smart Ecosystem through AI and SmartTech."
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
