import Card from "./card";
import Kasa from "../../assets/kasa.png";
import OhMyFood from "../../assets/OhMyFood.png";
import Booki from "../../assets/Booki.png";
import events from "../../assets/724_events.png";
import seo from "../../assets/seo.png";
import tamilFIlm from "../../assets/tamil_film.png";

import "./style.scss";
import Title from "../title";

const Projects = () => {
  return (
    <div className="projectContainer">
      <Title content="Projets" />
      <div className="projects">
        <Card
          repoLink="https://github.com/Giabilan/Kasa_P8"
          title="Kasa"
          desc="Application web de location immobilière"
          image={Kasa}
          link="https://kasa-application-web.netlify.app/"
          modalDesc="J'ai développé l'ensemble de l'application front-end de la nouvelle plateforme web de location d'appartements Kasa. J'ai suivi les maquettes Figma et les coding guidelines de l'entreprise. Malgré le retard dans le recrutement du développeur back-end, j'ai réussi à terminer le projet dans les délais et à répondre aux attentes des utilisateurs."
          skills="HTML, SCSS, React JS"
        />
        <Card
          repoLink="https://github.com/Giabilan/Ohmyfood-Giabilan"
          title="OhMyFood"
          desc="Applications de livraison"
          image={OhMyFood}
          link="https://giabilan.github.io/Ohmyfood-Giabilan/"
          modalDesc="J'ai développé un site web mobile first pour OhMyFood, une plateforme qui permet aux clients de composer le menu de leur repas dans des restaurants gastronomiques."
          skills=" HTML & SCSS"
        />
        <Card
          repoLink="https://github.com/Giabilan/Booki-Giabilan"
          title="Booki"
          desc="Application web de location immobilière"
          image={Booki}
          link="https://giabilan.github.io/Booki-Giabilan/"
          modalDesc="Création de la page d'accueil d'une agence de voyage en pure HTML & CSS"
          skills="HTML & CSS"
        />
        <Card
          repoLink="https://github.com/Giabilan/P10_724_events"
          title="724 Events"
          desc="Déboggage d'un site d'une agence"
          image={events}
          link="https://p10-724events.netlify.app/"
          modalDesc="Un premier développeur freelance avait commencé l'intégration, mais il a dû abandonner le projet pour raisons personnelles. Le site était fonctionnel, mais quelques bugs entravent le bon usage par les visiteurs.
          J'ai utilisé mes compétences en HTML, CSS et JavaScript pour corriger les bugs et améliorer le design du site."
          skills="HTML, CSS, React JS, Jest"
        />
        <Card
          repoLink="https://github.com/Giabilan/P9_Nina-Carducci"
          title="Photographe Nina Carducci"
          desc="Optimisation du SEO"
          image={seo}
          link="https://giabilan.github.io/Photographe_Nina_Carducci/"
          modalDesc="J'ai optimisé le site web de la photographe Nina Carducci pour les performances et le référencement."
          skills="HTML, CSS, Lighthouse"
        />
        <Card
          repoLink="https://github.com/Giabilan/TamilFilm"
          title="Film Kollywood"
          desc="Application web film Kollywood"
          image={tamilFIlm}
          link="https://film-tamil.netlify.app/"
          modalDesc="C'est mon premier site web créer en HTML & CSS & JS avant que je rentre en formation développeur web front end. 
          C'est un site qui répertorie tout les film de l'industrie Kollywood"
          skills="HTML & CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
