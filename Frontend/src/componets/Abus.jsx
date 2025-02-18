import p1 from "../images/pic2.png";
import p2 from "../images/pic6.png";
import p3 from "../images/pic1.png";
import p4 from "../images/pic4.png";
import "./AbusStyles.css";
function Abus() {
  return (
    <div className="abus">
      <h1>Unlock Your Cognitive Potential</h1>
      <div className="first-head">
        <div className="head-text">
          <h2>Personalized Profiles and Detailed Performance Tracking</h2>
          <p>
            Access personalized profiles offering comprehensive statistics on
            your game performance. Track your progress, identify strengths, and
            pinpoint areas for improvement across different cognitive domains.
            Your profile tailors the brain training experience to your specific
            needs.
          </p>
          <h2>Diverse Games for Holistic Cognitive Enhancement</h2>
          <p>
            Engage with our carefully curated selection of games designed to
            challenge and improve specific cognitive skills. From stimulating
            speed challenges to intricate problem-solving tasks, each game
            provides mental stimulation and entertainment.
          </p>

          <h2>Real-Time Progress Monitoring for Tangible Growth</h2>
          <p>
            Witness your cognitive abilities evolve with our real-time progress
            tracking feature. Monitor your performance, recognize patterns, and
            celebrate achievements as you enhance various cognitive domains.
          </p>

          <h2>Continual Innovation and Advancement</h2>
          <p>
            We are dedicated to continuous improvement. Our team is committed to
            refining assessments, expanding game offerings, and exploring new
            frontiers in cognitive development. Your participation drives our
            pursuit of excellence.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={p1} />
          <img alt="img" src={p2} />
          <img alt="img" src={p3} />
          <img alt="img" src={p4} />
        </div>
      </div>
    </div>
  );
};
export default Abus;
