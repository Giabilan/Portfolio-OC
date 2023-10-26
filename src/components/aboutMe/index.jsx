import "./style.scss";
import Title from "../title";

const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <Title content="Qui suis-je ?" />
      <div className="aboutMeTextContainer">
        <p className="aboutMeText">
          Je m&apos;appelle Giabilan, j&apos;ai 21 ans et je suis développeur
          web Front end. Je suis passionné par la technologie et j&apos;aime
          créer des choses qui ont un impact positif sur le monde. J&apos;ai
          commencé à apprendre à l&apos;âge de 20 ans, sans aucune connaissance
          préalable. J&apos;ai appris en suivant des tutoriels et en particulier grâce à la
          formation d&apos;Intégrateur Web de chez OpenClassrooms et le tout en
          9 mois seulement, j&apos;ai acquis les compétences nécessaires pour
          développer des sites web. J&apos;ai également appris à travailler en
          équipe et à gérer des projets. Je suis toujours en train
          d&apos;apprendre et de m&apos;améliorer, mais je suis fier de ce que
          j&apos;ai accompli jusqu&apos;à présent. Je suis impatient de voir ce
          que l&apos;avenir me réserve.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
