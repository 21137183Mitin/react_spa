import React, { Component } from "react";
import data from "./pyorat.json";

class Bike extends Component {
  render() {
    return (
      <div className="pyorat">
        <h2>Maastopyörät</h2>
        {data.Pyorat.map((bike) => {
          return (
            <div key={bike.id}>
              <div className="pyorat-kortti">
                <h1>{bike.name}</h1>
                <img src={bike.icon} alt={bike.name}></img>
                <p>{bike.description}</p>
                <a
                  href={bike.url}
                  className="button1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tutustu
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Bike;
