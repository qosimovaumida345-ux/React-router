import "./Services.css";
import heroImg from "../../assets/img1-home.jpg";
import serviceImg1 from "../../assets/drafting-man.jpg";
import serviceImg2 from "../../assets/studying.jpg";

import icon1 from "../../assets/design-build.png";
import icon2 from "../../assets/sofa.png";
import icon3 from "../../assets/house-icon.png";
import icon4 from "../../assets/construction-patch.png";

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container hero-content text-center">
          <h1>Our team services</h1>
        </div>
      </section>

      <section className="services-overview container">
        <div className="services-grid">
          <div className="service-card active">
            <div className="icon"><img src={icon1} alt="icon" style={{width: '32px'}} /></div>
            <h3>Design building/house</h3>
            <p>We have an architect for design new buildings</p>
          </div>
          <div className="service-card" style={{ boxShadow: 'none' }}>
            <div className="icon"><img src={icon2} alt="icon" style={{width: '32px'}} /></div>
            <h3 style={{color: '#333'}}>Interior Design</h3>
            <p>We have an interior designer for design your perfect inside house</p>
          </div>
          <div className="service-card" style={{ boxShadow: 'none' }}>
            <div className="icon"><img src={icon3} alt="icon" style={{width: '32px'}} /></div>
            <h3 style={{color: '#333'}}>Build from scratch</h3>
            <p>We have an contractor for build new building from scratch</p>
          </div>
          <div className="service-card" style={{ boxShadow: 'none' }}>
            <div className="icon"><img src={icon4} alt="icon" style={{width: '32px'}} /></div>
            <h3 style={{color: '#333'}}>Renovation</h3>
            <p>We can also renovate or rebuilds new buildings/house</p>
          </div>
        </div>
      </section>

      <section className="service-details container">
        <div className="detail-row">
          <img src={serviceImg1} alt="Drafting" className="detail-img" />
          <div className="detail-info blue-bg right-slant">
            <h2>Design building / house</h2>
            <p>
              Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div className="detail-row reverse">
          <img src={serviceImg2} alt="Studying" className="detail-img" />
          <div className="detail-info blue-bg left-slant">
            <p>
              Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
