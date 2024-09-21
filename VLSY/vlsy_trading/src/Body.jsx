import "./styles.css";

function Body() {
  return (
    <div className="home-container">

      <h1 className="body-heading">Home</h1>

      <section className="vertical-line-container">
        <span className="vertical-text">
            Building Safety, Innovating Spaces, Empowering Your Life
        </span>

        <div className="vertical-line"></div>

      </section>

      
      <section className="home-body">
          <div >
              <h1>Securing Your Future,<br/> Enhancing Your Space.</h1>
              
              <p>Security Solutions, Renovation Solutions, <br/> Electronic Solutions</p>

              <img src="/cctv.jpg" alt="CCTV-Image" className="home-image"/>
          </div>
      </section>

      <section className="rs-vertical-line-container">
        <span className="rs-vertical-text">
              Our Solutions
        </span>

        <div className="rs-vertical-line"></div>
        
        <div className="rs-image-container">
          <img src="/construction-worker.jpg" alt="Construction Worker" className="right-image"/>
          <img src="/man.jpg" alt="CCTV-Image" className="right-image"/>
          
        </div>

        <img src="/electrician.jpg" alt="CCTV-Image" className="big-right-image"/>

      </section>
      

    </div>
  );
}

export default Body;
