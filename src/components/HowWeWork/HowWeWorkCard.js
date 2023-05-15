import React, { useState, useRef } from "react";
import classes from "./HowWeWorkCard.module.scss";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";

const HowWeWorkCard = ({ index, header, body }) => {
  const [progress, setProgress] = useState(0);
  const cardContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start center", "end center"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest * 100);
  });
  return (
    <div className={classes.container} ref={cardContainerRef}>
      <div
        className={classes.progress}
        style={{
          height: `${progress}%`,
        }}
      ></div>
      <AnimatePresence>
        {progress > 0 && (
          <>
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.75, opacity: 0 }}
              className={classes.index}
            >
              {index}
            </motion.div>
            <div>
              <motion.h4
                initial={
                  index % 2 === 0
                    ? {
                        opacity: 0,
                        x: -50,
                      }
                    : {
                        opacity: 0,
                        x: 50,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={
                  index % 2 === 0
                    ? {
                        opacity: 0,
                        x: -50,
                      }
                    : {
                        opacity: 0,
                        x: 50,
                      }
                }
              >
                {header}
              </motion.h4>
              <motion.p
                initial={
                  index % 2 === 0
                    ? {
                        opacity: 0,
                        x: -50,
                      }
                    : {
                        opacity: 0,
                        x: 50,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={
                  index % 2 === 0
                    ? {
                        opacity: 0,
                        x: -50,
                      }
                    : {
                        opacity: 0,
                        x: 50,
                      }
                }
                transition={{
                  delay: 0.2,
                }}
              >
                {body}
              </motion.p>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HowWeWorkCard;
