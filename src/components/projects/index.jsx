import Card from "./card";
import Kasa from "../../assets/kasa.png";
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
          title="Kasa"
          desc="Application web de location immobilière"
          image={Kasa}
          link="https://kasa-application-web.netlify.app/"
          modalDesc="a"
        />
        <Card
          title="OhMyFood"
          desc="Application web de livraisons"
          image={OhMyFood}
          link="https://giabilan.github.io/Ohmyfood-Giabilan/"
          modalDesc="b"
        />
        <Card
          title="Booki"
          desc="Application web de location immobilière"
          image={Booki}
          link="https://giabilan.github.io/Booki-Giabilan/"
          modalDesc="c"
        />
        <Card
          title="Booki"
          desc="Application web de location immobilière"
          image={Booki}
          link="https://giabilan.github.io/Booki-Giabilan/"
          modalDesc="d"
        />
        <Card
          title="Kasa"
          desc="Application web de location immobilière"
          image={Kasa}
          link="https://kasa-application-web.netlify.app/"
          modalDesc="e"
        />
        <Card
          title="OhMyFood"
          desc="Application web de livraisons"
          image={OhMyFood}
          link="https://giabilan.github.io/Ohmyfood-Giabilan/"
          modalDesc="f"
        />
      </div>
    </div>
  );
};

export default Projects;
