import "../styles/card.css";

function Card({ cardImg, rating, votes, country, about, price }) {
  return (
    <div className="card">
      <img src={cardImg} alt="hey" />
      <span className="rating">
        <p>
          Rating: {rating} ({votes}){" "}
        </p>
        <ul>
          <li>{country}</li>
        </ul>
      </span>
      <span className="card-text">
        <p className="p1">{about}</p>
        <p>
          {" "}
          <strong>From ₹{price}</strong> / person
        </p>
      </span>
    </div>
  );
}

export default Card;
