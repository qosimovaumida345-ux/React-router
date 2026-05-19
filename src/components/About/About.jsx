import "./About.css";
import heroImg from "../../assets/about-hero.jpg";
import img1 from "../../assets/studying.jpg";
import img2 from "../../assets/handshake.jpg";

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container hero-content text-center">
          <h1>About our story - We are the best team</h1>
        </div>
      </section>

      <section className="story-section container">
        <div className="story-images">
          <img src={img1} alt="Team studying" className="img-main" />
          <img src={img2} alt="Handshake" className="img-overlay" />
        </div>
        <div className="story-info">
          <h2>Here were the story begins</h2>
          <p>
            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;