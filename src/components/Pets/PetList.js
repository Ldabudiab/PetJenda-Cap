import React, { useEffect, useState } from "react";
import { PetCard } from "./PetCard";
import { getAllPets, deletePets } from "../../modules/PetManager";
import { useHistory } from "react-router";
import "./PetCard.css" 

export const PetList = () => {

    const [pets, setPets] = useState([]);
    

    const history =useHistory();
    
    
    const getPets = () => {
            
          getAllPets().then(petsFromAPI => {
            setPets(petsFromAPI)
    });
   };



const handleDeletePet = id => {
    deletePets(id)
      .then(() => getAllPets().then(setPets));
  };

  useEffect(() => {
      getPets();
  },[]);

  
  
  return (
    <>
    <section className="section-content">
   

        <div className="card--holder">
        <div className="cardHolder-Header">
    
        <button type="button"
            className="button-8"
            onClick={() => {history.push("/pets/create")}}>
            Add pet
        </button>
        </div>
        <div id="pet-card-holder">
        { 
        pets.map(pet => <PetCard 
            key={pet.id}
            {...pet}
           pet={pet}
           
           handleDeletePet={handleDeletePet}/>)}
        </div>
        </div>
        

    </section>
</>

);
}