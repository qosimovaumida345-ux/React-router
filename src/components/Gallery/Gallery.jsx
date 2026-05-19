import "./Gallery.css";
import heroImg from "../../assets/img1-home.jpg";
import gal1 from "../../assets/interior-design.jpg";
import gal2 from "../../assets/buildmodern-house.jpg";
import gal3 from "../../assets/buildvia2floors.jpg";
import gal4 from "../../assets/modern-interiror-design.jpg";
import gal5 from "../../assets/renovation-co-working.jpg";
import gal6 from "../../assets/real-estate-house.jpg";

const Gallery = () => {
  const projects = [
    { img: gal1, title: "Interior design", time: "3 Months work time" },
    { img: gal2, title: "Build modern house", time: "3 Months work time" },
    { img: gal3, title: "Build villa two floors", time: "3 Months work time" },
    { img: gal4, title: "Modern interior design", time: "3 Months work time" },
    { img: gal5, title: "Renovation co working room", time: "3 Months work time" },
    { img: gal6, title: "Real estate house", time: "3 Months work time" },
  ];

  return (
    <div className="gallery-page">
      <section className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container hero-content text-center">
          <h1>Here some our best works</h1>
        </div>
      </section>

      <section className="gallery-section container">
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div className="gallery-card" key={index}>
              <img src={project.img} alt={project.title} />
              <div className="gallery-info">
                <h3>{project.title}</h3>
                <p>{project.time}</p>
                <button className="btn-primary" style={{marginTop: '15px'}}>See process</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
