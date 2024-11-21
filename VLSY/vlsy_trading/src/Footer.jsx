import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>VLSY <br className="mobile-break"/>Trading LTD</h3>

        <img src="/VLSY-Logo.jpg" alt="CCTV-Image" className="footer-image"/>

        <div className="footer-rs">
          <h4>Get In Touch With Us</h4>
          <br />
          <p>Cellphone Number</p>
          <p>076 182 9295</p>
          <br />
          <p>Alternative Cellphone Number</p>
          <p>060 904 7826</p>
          <br />
          <p>Email</p>
          <p>vlsytrading@gmail.com</p>
        </div>
          
      </div>
    </footer>
  );
}

export default Footer
