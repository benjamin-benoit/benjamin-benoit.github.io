import "./App.css";
import Footer from "./Components/Footer";
import Me from "./Components/Me";
import Presentation from "./Components/Presentation";

const App = () => {
  return (
    <div className="container">
      <div className="section">
        <img className="illu" src="../src/assets/benjy_ben_send-01.png" />
        <div className="bloc">
          <Me />
          <Presentation />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
