import React from "react";
import classes from "./Welcome.module.scss";
import { motion } from "framer-motion";

const Welcome = () => {
  const variants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2, duration: 0.3 }}
      className={classes.container}
    >
      <h1>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0,
          }}
        >
          s
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.1,
          }}
        >
          m
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.2,
          }}
        >
          a
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.3,
          }}
        >
          r
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.4,
          }}
        >
          t
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.5,
          }}
        >
          .
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.6,
          }}
        >
          i
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.7,
          }}
        >
          x
        </motion.div>
      </h1>
    </motion.header>
  );
};

export default Welcome;
