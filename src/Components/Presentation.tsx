import Typewriter from "typewriter-effect";
import { SocialIcon } from "react-social-icons";

export default function Presentation() {
  return (
    <>
      <div className="presentation">
        <Typewriter
          options={{
            strings: [
              "A developer for",
              "Web Apps with React JS",
              "& Mobile Apps with React Native",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
      <div className="social-links">
        <span>Find me on:</span>
        <SocialIcon
          url="https://www.linkedin.com/in/benjaminbenoit/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://github.com/benjamin-benoit"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </>
  );
}
