import "./App.css";
import Footer from "./Components/Footer";
import Me from "./Components/Me";
import Particles from "./Components/Particles";
import Presentation from "./Components/Presentation";
import Story from "./Components/Story";

const App = () => {
  return (
    <>
      <Particles />

      <div className="container">
        <div className="section">
          <div className="bloc">
            <Me />
            <Presentation />
          </div>
        </div>
        <div className="section">
          <span className="wave" role="img" aria-labelledby="wave">
            💼
          </span>
          <h4>Work in Paris</h4>
        </div>
        <div className="section">
          <Story />
        </div>
        <div className="section">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
