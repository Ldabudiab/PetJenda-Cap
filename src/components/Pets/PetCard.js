import React from "react";
import "./PetCard.css" 
import { NavLink } from "react-router-dom";
import cat from "../../images/cat.jpg"
import { Image } from "cloudinary-react";

export const PetCard = ({pet, handleDeletePet}) => {

    console.log(pet)

    const petLink = `/tasks/${pet.id}`

    return (
        <>
        <div className="card__content--image">
            <div>
           <NavLink to={petLink} className="cat-pic"><a href="">
          <img
          src={pet.img}
          alt="profile pic"
          className="profilePic"
        />
        </a></NavLink> 
            </div>
            
        </div>
        <div className="pet-name">
            <h2>{pet.name}</h2>
        </div>
        <div className="delete-buttons">
            <button className="button-delete"  type="button" onClick={() => handleDeletePet(pet.id)}>Delete</button>
        </div>
        </>
    )
}