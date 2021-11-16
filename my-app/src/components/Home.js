import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
const Home = (props) => {
  const [state, setState] = React.useState("");
  const search = (e) => {
    props.history.push({ pathname: "/search", state });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img src="/es.png" alt="Logo" />
        </div>
        <form className="home__form" onSubmit={search}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Search" />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;
