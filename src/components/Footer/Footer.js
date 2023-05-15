import React from "react";
import classes from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["Footer"]);
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.smart_ix}>
          <img
            src="	https://www.smart-ix.ai/images/logo/smart-ix-logo_white.svg"
            alt="Smart.iX"
          />
          <p>
            {t(
              "AI for a Smarter Lifestyle: The German-based startup is a technology leader in Smart Ecosystems and enables AI-based intelligent customer experiences."
            )}
          </p>
        </div>
        <div className={classes.contact}>
          <h6>{t("Contact")}</h6>
          <p>
            SMART.iX GmbH <br />
            Schelmenwasenstr. 32 <br />
            D-70567 Stuttgart
          </p>
          <a href="#email">hello@smart-ix.ai</a>
        </div>
      </div>
      <div>
        <div className={classes.site__links}>
          <h6>{t("Site Links")}</h6>
          <ul>
            <li>
              <a href="#home">{t("Intro")}</a>
            </li>
            <li>
              <a href="#about">{t("company")}</a>
            </li>
            <li>
              <a href="#blog">{t("Blog")}</a>
            </li>
            <li>
              <a href="#home">{t("API")}</a>
            </li>
            <li>
              <a href="#home">{t("LOGIN")}</a>
            </li>
          </ul>
        </div>
        <div className={classes.registration}>
          <h6>{t("Registration")}</h6>
          <ul>
            <li>Tax-ID: DE307311838</li>
            <li>Trade Register ID: HRB 756949</li>
            <li>Register Court: Stuttgart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
