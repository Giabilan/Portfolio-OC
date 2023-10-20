import Card from "./Card";
import Kasa from "../../../public/Kasa.png"; // Remplacez "" par le chemin réel vers votre image
import OhMyFood from "../../../public/OhMyFood.png";
import Booki from "../../../public/Booki.png";

import "./style.scss";

const Projects = () => {
  return (
    <div className="projectContainer">
      <h2 className="title">
        Projets  
        <div className="schoolName">OpenClassrooms</div>
      </h2>
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
