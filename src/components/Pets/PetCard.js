import React from "react";
import "./PetCard.css" 


export const PetCard = ({pet}) => {

    console.log(pet)

    return (
        <>
        <div className="card__content--image">
            <div>
            <img src={require("../../images/cat.jpg").default} alt="Profile Picture" />
            </div>
            
        </div>
        <div className="pet-name">
            <h2>{pet.name}</h2>
        </div>
        </>
    )
}