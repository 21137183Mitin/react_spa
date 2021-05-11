/* eslint-disable */
import React, { Component, useEffect } from "react";


// const  itemIcon = data.Pets.icon;
// const  itemName = data.Pets.name;
// const  itemDescription = data.Pets.description;
// const  itemSkills = data.skills;
//////////////////////////////////////////////////////////////////////////////////
//https://www.codecademy.com/courses/react-101/lessons/the-effect-hook/exercises/rules-of-hooks

// import DATA from "./data";

// export function get(endpoint) {
//   const delay = Math.floor(Math.random() * 1000) + 500;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!DATA.hasOwnProperty(endpoint)) {
//         const validEndpoints = Object.keys(DATA)
//           .map((endpoint) => ` - "${endpoint}"`)
//           .join("\n ");
//         reject(
//           `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
//         );
//       }

//       const response = { status: 200, data: DATA[endpoint] };

//       resolve(response);
//     }, delay);
//   });
// }

////////////////////////////////////////////////////////////////////////////////////

// const fetchPets = async () => {   // "async" for asynchronous work "await"
//     const apiUrl = 'https://api.guildwars2.com/v2/pets/34';
//     let pet = {};
//     try{
//         const response =  await fetch(apiUrl);
//         if(response.ok){
//           pet = await response.json();
          
          
//         }
//     }
//     catch(error){
//         console.log(error);
//     }
//     }

//     let data = {};
//     const renderWordResponse = (res) => {
        
//         for (const key in res) {
//             if (Object.hasOwnProperty.call(res, key)) {
//                 data[key] = res[key];
//             }
//         }
        
//         //console.log(wordList)
//         return data;
//     }

   
    
    // let pet = fetch('https://api.guildwars2.com/v2/pets/34')
    // .then(function(response) {
    //     //console.log('response', response)
    //     response.json().then(function(data) {
    //         console.log('data', data)
            
    //     })
        
    // })

    // console.log(pet.id)
    
    let data_name;
    let data_description;
    let data_icon;
    
    async function fetchMoviesJSON() {
        const response = await fetch('https://api.guildwars2.com/v2/pets/34');
        const movies = await response.json();
        return movies;
        
    }
    
    const data = fetchMoviesJSON().then(movies => {
        data_name = movies.name;
        data_description = movies.description;
        data_icon = movies.icon;        
    })
    
    
    
    
    
    
    
    class Card1 extends Component {
        
       
        
        
        render() {
            return (
            <div> 
                <h2>Pet card</h2>

                        <div key="data.id">
                            <div className='card'>
                            <h1>{data_name}</h1>    
                            <img src={data_icon} alt={data_name} ></img>
                            {console.log(data)}
                            <p className="price">{data_description}</p>

                            <form action={"https://wiki.guildwars2.com/wiki/" + data_name} method="get" target="_blank">
                                <button type="submit">More info</button>
                            </form>
                            
                            </div>
                        </div>
                    
                
                
                
            </div>
            
            )
            
    }
}



export default Card1;


