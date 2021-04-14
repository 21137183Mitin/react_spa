import React, { Component } from "react";
import data from "./data.json";

// const  itemIcon = data.Pets.icon;
// const  itemName = data.Pets.name;
// const  itemDescription = data.Pets.description;
// const  itemSkills = data.skills;


class Json extends Component {
  render() {
    return (
    <div>
        <h2>Json datan </h2>
            {
                data.Pets.map((pet, i) => {
                    return (
                        <div key={i}>
                            <div className='card'>
                            <h1>{pet.name}</h1>    
                            <img src={pet.icon} alt={pet.name} ></img>
                            <p className="price">{pet.description}</p>
                            <p>{pet.skills[0].id}</p>
                            </div>
                        </div>
                    );
                })
            }
    </div>
    );
  }
}
 
export default Json;
