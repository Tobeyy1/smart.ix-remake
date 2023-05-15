import React, { useRef, useState } from "react";
import classes from "./Banner.module.scss";
import GIA18 from "../../assets/gia18.png";
import GIA20 from "../../assets/gia20.png";
import VOLKSWAGEN from "../../assets/vw_fm.png";
import COOL_VENDOR from "../../assets/cool_vendor.png";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";

const Banner = () => {
  const [progress, setProgress] = useState(0);
  const bannerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start center", "end center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    setProgress(latest * 100);
  });
  return (
    <div className={classes.container} ref={bannerRef}>
      <AnimatePresence>
        {/* {progress === 100 && ( */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          exit={{ height: 0 }}
          className={classes.content}
        >
          <a href="#banner">
            <img src={GIA18} alt="Client" />
          </a>
          <a href="#banner">
            <img src={COOL_VENDOR} alt="Client" />
          </a>
          <a href="#banner">
            <img src={VOLKSWAGEN} alt="Client" />
          </a>
          <a href="#banner">
            <img src={GIA20} alt="Client" />
          </a>
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </div>
  );
};

export default Banner;
