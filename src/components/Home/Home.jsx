import "./Home.css";

import heroImg from "../../assets/img1-home.jpg";
import comp1 from "../../assets/real-estate-house.jpg";
import comp2 from "../../assets/working-builders.jpg";
import comp3 from "../../assets/drafting-man.jpg";
import comp4 from "../../assets/img2-home.jpg";
import checkIcon from "../../assets/noto-v1_check-mark.png";

import icon1 from "../../assets/design-build.png";
import icon2 from "../../assets/sofa.png";
import icon3 from "../../assets/house-icon.png";
import icon4 from "../../assets/construction-patch.png";

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container hero-content">
          <h1>We build your dream house well and professionally</h1>
          <p>Our team can build a house according to your wishes. Any design and concept, we will help make it happen.</p>
          <button className="btn-primary">Contact us</button>
        </div>
      </section>

      <section className="company-section container">
        <div className="company-images">
          <img src={comp1} alt="House" className="img-comp" />
          <img src={comp2} alt="Builders" className="img-comp" />
          <div className="badge">
            <img src={checkIcon} alt="Check" />
            <span>Pro licensed</span>
          </div>
          <img src={comp3} alt="Drafting" className="img-comp" />
          <img src={comp4} alt="Pool house" className="img-comp" />
        </div>
        <div className="company-info">
          <h2>Our company</h2>
          <p>
            Debuilds is a team of architects, interior design, and contractors who help our clients not only to build their dream building, but also to feel comfortable after the building is used.
          </p>
          <p className="handled-text">We already handled</p>
          <div className="stats">
            <div>
              <h3>50+ Clients</h3>
            </div>
            <div>
              <h3>30+ House</h3>
            </div>
            <div>
              <h3>20+ Building</h3>
            </div>
          </div>
          <button className="btn-primary">See more</button>
        </div>
      </section>

      <section className="services-section container">
        <div className="services-header">
          <h2>Our services</h2>
          <p>Our services include building new buildings and renovating old buildings</p>
        </div>
        <div className="services-grid">
          <div className="service-card active">
            <div className="icon"><img src={icon1} alt="icon" style={{width: '32px'}} /></div>
            <h3>Design building/house</h3>
            <p>We have an architect for design new buildings</p>
          </div>
          <div className="service-card">
            <div className="icon"><img src={icon2} alt="icon" style={{width: '32px'}} /></div>
            <h3>Interior Design</h3>
            <p>We have an interior designer for design your perfect inside house</p>
          </div>
          <div className="service-card">
            <div className="icon"><img src={icon3} alt="icon" style={{width: '32px'}} /></div>
            <h3>Build from scratch</h3>
            <p>We have an contractor for build new building from scratch</p>
          </div>
          <div className="service-card">
            <div className="icon"><img src={icon4} alt="icon" style={{width: '32px'}} /></div>
            <h3>Renovation</h3>
            <p>We can also renovate or rebuilds new buildings/house</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
