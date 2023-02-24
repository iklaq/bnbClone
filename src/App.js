import cardData from "./cardData";
import About from "./components/About";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import "./styles/common.css";

const App = () => {
  const cards = cardData.map((card) => <Card key={card.id} {...card} />);

  return (
    <>
      <NavBar />
      <About />
      <div className="card-grid">{cards}</div>
    </>
  );
};

export default App;
