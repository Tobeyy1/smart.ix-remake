import React from "react";
import classes from "./Testmonial.module.scss";
import KITTEL from "../../assets/kittel.png";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation(["Testimonial"]);
  return (
    <div className={classes.container}>
      <section className={classes.content}>
        <div className={classes.testimonial}>
          <div className={classes.partner}>
            <img src={KITTEL} alt="Kittel" />
            <span className={classes.name}>Michael Kittel</span>
            <span className={classes.organization}>Volkswagen Immobilien.</span>
          </div>
          <p className={classes.quote}>
            "
            {t(
              "While searching for a vendor independent platform for smart home, tenants and our services, SMART.iX has convinced us completely, so that we have entered a strategic cooperation. The innovative and flexible team is a guarantee for the highest level of quality, whereby the topics of privacy & security receive the highest priority."
            )}
            "
          </p>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
