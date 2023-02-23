import "../styles/about.css";
import imageLink from "../assets/about.png";
function About() {
  return (
    <section className="about">
      <img src={imageLink} alt="" />
      <h1>Online Experiences</h1>
      <p>Plan a trip with help from local Hosts around the world.</p>
    </section>
  );
}

export default About;
