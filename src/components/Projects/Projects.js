import React from "react";
import classes from "./Projects.module.scss";
import SPLACE from "../../assets/splace_room.jpg";
import TOGG from "../../assets/togg.jpg";
import PORSHE from "../../assets/porsche_digital_foundry_space.jpeg";
import AUDI from "../../assets/audi_smart_home.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation(["Projects"]);
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <div>
          <h2>{t("Our Featured Projects.")} </h2>
          <button className={classes.header__cta}>{t("Request Demo")}</button>
        </div>
        <p>
          {t(
            "We've the priveledge to work with some of the largest and most innovative companies."
          )}
          <br />{" "}
          {t(
            "Our technology is used by businesses which are transforming the industry."
          )}
        </p>
      </header>
      <section className={classes.projects}>
        <div>
          <div className={classes.project} id={classes.project__1}>
            <img src={SPLACE} alt="" />
            <div className={classes.about}>
              <p>
                {t("Smart Apartments")} <span>{t("Splace")}</span>
              </p>

              <button className={classes.project__cta}>
                <span className="material-symbols-rounded">north_east</span>
              </button>
            </div>
          </div>
          <div className={classes.project} id={classes.project__2}>
            <img src={TOGG} alt="" />
            <div className={classes.about}>
              <p>
                {t("Smart Cars")} <span>{t("Togg")}</span>
              </p>

              <button className={classes.project__cta}>
                <span className="material-symbols-rounded">north_east</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={classes.project} id={classes.project__3}>
            <img src={PORSHE} alt="" />

            <div className={classes.about}>
              <p>
                {t("Smart Experience")} <span>{t("Porshe Digital")}</span>
              </p>

              <button className={classes.project__cta}>
                <span className="material-symbols-rounded">north_east</span>
              </button>
            </div>
          </div>
          <div className={classes.project} id={classes.project__4}>
            <img src={AUDI} alt="" />
            <div className={classes.about}>
              <p>
                {t("Smart Home")} <span>{t("Audi")}</span>
              </p>

              <button className={classes.project__cta}>
                <span className="material-symbols-rounded">north_east</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
