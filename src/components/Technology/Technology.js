import React from "react";
import classes from "./Technology.module.scss";
import { useTranslation } from "react-i18next";

const Technology = () => {
  const { t } = useTranslation(["Technology"]);
  return (
    <div className={classes.container} id="technology">
      <div>
        <section className={classes.top__section}>
          <div className={classes.technology__card} id={classes.card__1}>
            <h4>{t("AI/ML-as-a-Service")}</h4>
            <p>
              {t(
                "Code-free, simple Deep Learning, Generative AI & Machine Learning by our Flexible Classifier and DeepGate platform. Effortlessly serve a multitude of use cases for AI/ML-based scenarios around smart lifestyle in a breeze."
              )}
            </p>
          </div>
          <div className={classes.technology__card} id={classes.card__2}>
            <h4>{t("Smart Ecosystems")}</h4>
            <p>
              {t(
                "Our 'Universal Translator' gives you 1 API for 200+ integrations. Interconnect smart services & devices and serve any app. Save money and focus on your customer experience by Smart Adapters to transform people's lives."
              )}
            </p>
          </div>
        </section>
        <div>
          <section className={classes.mid__section}>
            <div className={classes.technology__card} id={classes.card__3}>
              <h4>{t("Security/Privacy-by-Design")}</h4>
              <p>
                {t(
                  "Our Technology is 100% GDPR-compliant. Security, privacy & protection of your data are designed into the core of our solutions. We use highest security, latest SSL-Encryption & most secured servers located only in Europe."
                )}
              </p>
            </div>
            <div>
              <header className={classes.header}>
                <h2>{t("Our Technology")}</h2>
                <p>
                  {t(
                    "Applied AI & Limitless Connectivity for a Smart Lifestyle among smart, adaptive Spaces. The Smart Glue to link your Smart World and connect anything together in one place so you can take better care of your self, your family, your home or just be more productive."
                  )}
                </p>
              </header>
              <div className={classes.technology__card} id={classes.card__4}>
                <h4>{t("Smart Personaliztation")}</h4>
                <p>
                  {t(
                    "Our unique iX-Account enables an anonymized shadow-account for seamless personalization. Users can connect any service by 3rd party credentials for a secure & reliable experience. The secret sauce you won't see, but will love."
                  )}
                </p>
              </div>
            </div>
          </section>
          <section className={classes.bottom__section}>
            <div className={classes.technology__card} id={classes.card__5}>
              <h4>{t("Smart Data & Normalization")}</h4>
              <p>
                {t(
                  "Anonymized, normalized data in a simple, standarized format through a consumable API among all the smart domains, that can be used for AI/ML or BigData analytics across your entire business lines without violating privacy."
                )}
              </p>
            </div>
            <div className={classes.technology__card} id={classes.card__6}>
              <h4>{t("White-Label Customization")}</h4>
              <p>
                {t(
                  "Create and customize personalized, smart user interfaces. Our solutions help you design user experiences the way you want to follow the branding you desire. Preserve your valuable customer touch points to ensure brand loyalty."
                )}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Technology;
