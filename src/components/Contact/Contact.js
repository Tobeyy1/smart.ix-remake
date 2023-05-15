import React, { useRef, useState } from "react";
import classes from "./Contact.module.scss";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [progress, setProgress] = useState(0);
  const contactContainerRef = useRef(null);
  const { t } = useTranslation(["Contact"]);

  const { scrollYProgress } = useScroll({
    target: contactContainerRef,
    offset: ["start end", "start center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    setProgress(100 - latest * 100);
  });
  return (
    <div className={classes.container} ref={contactContainerRef} id={"contact"}>
      <header className={classes.header}>
        <h2 style={{ right: `${progress}%` }}>{t("Get In Touch with us.")}</h2>
        <h2 className={classes.email} style={{ left: `${progress}%` }}>
          <a href="hello@smart-ix.ai">hello@smart-ix.ai6</a>
        </h2>
      </header>
      <section className={classes.body}>
        <form className={classes.form}>
          <input type="text" placeholder={t("Name")} />
          <input type="email" placeholder={t("Email")} />
          <input type="text" placeholder={t("Subject")} />
          <textarea
            name="Message"
            id=""
            cols="30"
            rows="10"
            placeholder={t("Your Message")}
          ></textarea>
          <button>{t("SUBMIT")}</button>
        </form>
        <div className={classes.links}>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/smartixai/"
                target="_blank"
                rel="noreferrer"
              >
                facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/smart_ix"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCkcB6zbmZ4Z4EFRanaLEYyg"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/smartix.ai"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </li>
            <li>
              <a href="#blog" id={classes.blog}>
                BLOG
              </a>
            </li>
          </ul>
          <div className={classes.address}>
            <h6>{t("Where to find us")}</h6>
            <p>
              SMART.iX GmbH <br />
              Schelmenwasenstr. 32 <br />
              D-70567 Stuttgart
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
