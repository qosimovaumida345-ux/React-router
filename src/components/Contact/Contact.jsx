import { useState } from "react";
import "./Contact.css";
import heroImg from "../../assets/img1-home.jpg";
import contactImg from "../../assets/final-contact-img.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !contactInfo || !message) {
      setStatus("Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    const token = "8641599033:AAFqD1brrN4CGQebEFnnCNFire5f3xsDep4";
    const chatId = "8572227182";
    const text = `New Contact Form Submission:\n\nName/Company: ${name}\nPhone/Email: ${contactInfo}\nMessage: ${message}`;
    
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          setStatus("Message sent successfully!");
          setName("");
          setContactInfo("");
          setMessage("");
        } else {
          setStatus("Failed to send message. Please try again.");
        }
      })
      .catch(error => {
        setStatus("Error happened: " + error.message);
      });
  };

  return (
    <div className="contact-page">
      <section className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="container hero-content text-center">
          <h1>Need some consultation or want to collaborarion with us? Let's connect!</h1>
        </div>
      </section>

      <section className="contact-section container">
        <div className="contact-wrapper">
          <div className="contact-image">
            <img src={contactImg} alt="Contact us" />
          </div>
          <div className="contact-form-container">
            <h2>Let's talk about anything you need</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <input 
                  type="text" 
                  placeholder="Your name/company name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input 
                  type="text" 
                  placeholder="Phone/E-mail" 
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                />
              </div>
              <textarea 
                placeholder="Message" 
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="btn-primary" style={{alignSelf: 'flex-start'}}>Submit</button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
