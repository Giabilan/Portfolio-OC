import Card from "./card";
import Kasa from "../../assets/kasa.png"; // Remplacez "" par le chemin réel vers votre image
import OhMyFood from "../../assets/OhMyFood.png";
import Booki from "../../assets/Booki.png";

import "./style.scss";
import Title from "../title";

const Projects = () => {
  return (
    <div className="projectContainer">
      <Title content="Projets" />
      <div className="projects">
        <Card
          projectTitle="Kasa"
          projectDesc="Application web de location immobilière"
          projectImage={Kasa}
          link="https://kasa-application-web.netlify.app/"
        />
        <Card
          projectTitle="OhMyFood"
          projectDesc="Application web de livraisons"
          projectImage={OhMyFood}
          link="https://giabilan.github.io/Ohmyfood-Giabilan/"
        />
        <Card
          projectTitle="Booki"
          projectDesc="Application web de location immobilière"
          projectImage={Booki}
          link="https://giabilan.github.io/Booki-Giabilan/"
        />
        <Card
          projectTitle="Booki"
          projectDesc="Application web de location immobilière"
          projectImage={Booki}
          link="https://giabilan.github.io/Booki-Giabilan/"
        />
        <Card
          projectTitle="Kasa"
          projectDesc="Application web de location immobilière"
          projectImage={Kasa}
          link="https://kasa-application-web.netlify.app/"
        />
        <Card
          projectTitle="OhMyFood"
          projectDesc="Application web de livraisons"
          projectImage={OhMyFood}
          link="https://giabilan.github.io/Ohmyfood-Giabilan/"
        />
      </div>
    </div>
  );
};

export default Projects;
