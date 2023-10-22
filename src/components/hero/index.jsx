import Button from "../Button";
import "./style.scss";
import { motion } from "framer-motion";

const fileUrl = "en_cours_de_realisation";

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
            <motion.a href={fileUrl} download>
              <Button content="Télecharger mon CV" />
            </motion.a>
          </motion.div>
          <motion.img
            className="scrollIcon"
            variants={textVariants}
            animate="scrollButton"
            src="./src/assets/scroll.png"
            alt="souris scrolling image"
          />
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
      <div className="imageContainer">
        <img src="src/assets/pic_of_giabilan.png" alt="image de Giabilan" />
      </div>
    </div>
  );
};

export default Hero;
