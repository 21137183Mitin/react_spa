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
                    //console.log(pet)
                    return (
                        <div key={i}>
                            <div className='card'>
                            <h1>{pet.name}</h1>    
                            <img src={pet.icon} alt={pet.name} ></img>
                            <p className="price">{pet.description}</p>
                            {/* <p>{pet.skills[0].id}</p> */}
                            {/* <p>{pet.url}</p> */}
                            {/* let name = {pet.url} + "Juvenile_Fire_Wyvern";
                            <a href= ${name} target="_blank"> More info </a> */}
                            {/* <p>
                            {pet.url}{pet.name}
                            </p> */}
                            

                            {/* <a href={["https://wiki.guildwars2.com/wiki/" + pet.name]} target="_blank" rel="noreferrer"> More info </a> */}
                            {/* <button type="button">
                                <a href={[pet.url + pet.name]} target="_blank" rel="noreferrer"> More info </a>
                            </button> */}

                            <form action={[pet.url + pet.name]} method="get" target="_blank">
                                <button type="submit">More info</button>
                            </form>
                            
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
