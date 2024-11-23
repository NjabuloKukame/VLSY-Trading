import React, { useState } from 'react';
import emailjs from 'emailjs-com'; 
import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const templateParams = {
      name,
      email,
      phone,
      message
    };

    emailjs
      .send('service_8selmcr', 'template_i7bqqc8', templateParams, 'HvGRIw5zGqqaR544r')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSent(true); 
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (err) => {
          console.log('FAILED...', err);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <>
      <Header />
      <div className="contact-body">
        <h1 className="body-heading">Contact Us</h1>

        <div className="contact-content">
          <section className="contact-ls">
            <h2>
              Have <br /> Questions? <br /> We Would <br /> Love To <br /> Hear
              from <br /> You
            </h2>
          </section>

          <section className="form-card">
            <div className="form-card1">
              <div className="form-card2">
                <form className="form" onSubmit={handleSubmit}>
                  <p className="form-heading">Get In Touch</p>

                  <div className="form-field">
                    <input
                      required=""
                      placeholder="Name"
                      className="input-field"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <input
                      required=""
                      placeholder="Email"
                      className="input-field"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <input
                      required=""
                      placeholder="Cellphone Number"
                      className="input-field"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="form-field">
                    <textarea
                      required=""
                      placeholder="Message To Get A Quote"
                      cols="30"
                      rows="3"
                      className="input-field"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button type="submit" className="sendMessage-btn">Send Message</button>
                </form>
                {isSent && <p className="success-message">Your message has been sent!</p>}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
