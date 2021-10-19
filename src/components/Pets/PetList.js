import React, { useEffect, useState } from "react";
import { PetCard } from "./PetCard";
import { getAllPets, deletePets, update } from "../../modules/PetManager";
import { useHistory } from "react-router";

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
   

        <div className="card-holder">
        <div className="cardHolderHeader">
    
        <button type="button"
            className="button-7"
            onClick={() => {history.push("/pets/create")}}>
            Add pet
        </button>
        </div>
        <div id="pet-card-holder">
        { 
        pets.map(pet => <PetCard key={pet.id} pet={pet} handleDeletePet={handleDeletePet}/>)}


        </div>
        </div>
        

    </section>
</>

);
}