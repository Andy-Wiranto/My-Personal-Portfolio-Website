import { Link } from "react-scroll";
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Andy Wiranto</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Web Developer
          </h1>
          <p className="hero--section-description">
          I'm an undergraduate Computer Science major, I am passionate about learning the fundamentals of programming, algorithms, and software development.
            <br /> 
          </p>
        </div>
        
          <Link
        
            to="Contact"
            className="btn btn-primary"
          >
          Get In Touch
          </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
