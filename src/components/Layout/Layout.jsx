import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="header transparent">
        <div className="container header-container">
          <Link to="/" className="logo">DB-</Link>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-col brand-col">
            <h2 className="footer-logo">DB-</h2>
            <p>Lizenzo street number 12</p>
            <p>Jakarta, Indonesia</p>
            <button className="btn-directions">Get directions</button>
          </div>
          <div className="footer-col">
            <h3>Menu</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/services">Service</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul>
              <li><span>E-mail</span></li>
              <li><span>Mobile</span></li>
              <li><span>Whatsapp</span></li>
              <li><span>Fax</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Career</h3>
            <ul>
              <li><span>Job</span></li>
              <li><span>Part-time</span></li>
              <li><span>Internship</span></li>
              <li><span>Service</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Business</h3>
            <ul>
              <li><span>Affiliate</span></li>
              <li><span>Collaboration</span></li>
              <li><span>Investment</span></li>
              <li><span>People</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>2021 - Copyright ZHB Studio</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
