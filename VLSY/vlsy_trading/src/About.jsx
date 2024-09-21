import Header from "./Header";
import Footer from "./Footer";
import "./styles.css";

function About() {
  return (
    <>
      <Header />

      <h1 className="body-heading">About Us</h1>

      <div className="about-body">

        <section className="about-card">

          <div className="cards">
            <div className="card black">
              <p className="tip">Who Are We?</p>
              <p className="second-text">At VLSY Trading, we are dedicated to enhancing the security, functionality, and aesthetics of your spaces. With a comprehensive range of services, we cater to your diverse needs through our specialized solutions in security, renovation, and electronics.</p> 
              
            </div>
            <div className="card blue">

              <p className="tip">Our Services</p>
              <p className="second-text">Security Solutions: Protect your property with our advanced security systems, including cameras, alarms, and electric fences, customized to your needs.</p>
              <br />
              <p className="second-text">Renovation Solutions: Revitalize your space with our expert services in plumbing, carpentry, welding, and painting, covering all aspects of renovation.</p>
              <br />
              <p className="second-text">Electronic Solutions: Upgrade your home or business with our installation and maintenance services for gate motors, garage doors, solar panels, DSTV, and sound systems.</p>
              
            </div>
            <div className="card darkblue">
              <p className="tip">Why Choose VLSY Trading?</p>
              <p className="second-text">Quality Workmanship: Our skilled team delivers top-quality results on every project, ensuring lasting outcomes.</p>
              <br />
              <p className="second-text">Comprehensive Services: We offer a full range of services, making us your go-to for security, renovation, and electronics.</p>
              <br />
              <p className="second-text">Customer Satisfaction: Your satisfaction is our priority. We work closely with you to exceed expectations.</p>
              
            </div>
          </div>

        </section>

      </div>

      <Footer/>
    </>
  );
}

export default About;
