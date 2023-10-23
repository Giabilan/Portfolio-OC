import Button from "../Button";
import "./style.scss";
import { motion } from "framer-motion";
import { PiMouseSimpleFill } from "react-icons/pi";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>RAJENDRAN GIABILAN</motion.h2>
          <motion.h1 variants={textVariants}>
            Développeur Web Front End
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Projets" variants={textVariants}>
              <Button content="Voir mes projets" />
            </motion.a>
            <motion.a href="../src/assets/cv_rajendran_giabilan.pdf" download>
              <Button content="Télecharger mon CV" />
            </motion.a>
          </motion.div>
          <motion.div
            className="scrollIcon"
            variants={textVariants}
            animate="scrollButton"
          >
            <PiMouseSimpleFill />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Créatif Challenge Passion Dev
      </motion.div>
    </div>
  );
};

export default Hero;
