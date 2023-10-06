import Typewriter from "typewriter-effect";

export default function Presentation() {
  return (
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
  );
}
