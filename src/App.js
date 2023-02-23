import NavBar from "./components/NavBar";
import About from "./components/About";
import Card from "./components/Card";
import "./styles/common.css";
import Arr from "./cardData";

function App() {
  const cardArr = Arr.map((ind) => (
    <Card
      cardImg={ind.cardImg}
      rating={ind.rating}
      votes={ind.votes}
      country={ind.country}
      about={ind.about}
      price={ind.price}
    />
  ));

  return (
    <>
      <NavBar />
      <About />
      <div className="all-cards">{cardArr}</div>
    </>
  );
}

export default App;
