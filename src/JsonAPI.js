import React, { Component } from "react";

var requestURL = "https://api.guildwars2.com/v2/pets/34";
var xhReq = new XMLHttpRequest();
xhReq.open("GET", requestURL, false);
xhReq.send();
var pet = JSON.parse(xhReq.responseText);

class Card extends Component {
  render() {
    return (
      <div>
        <div key="pet.id">
          <div className="card">
            <h1>{pet.name}</h1>
            <img src={pet.icon} alt={pet.name}></img>
            <p className="price">{pet.description}</p>

            <form
              action={"https://wiki.guildwars2.com/wiki/" + pet.name}
              method="get"
              target="_blank"
            >
              <button type="submit">More info</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
