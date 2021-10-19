import React, { useState } from "react";
import { useHistory } from "react-router";
import { addPet } from "../../modules/PetManager";

export const PetForm = () => {

    const [pet, setPet] = useState({
        name: "",
        img: "",
    });


    const history = useHistory();

    const handleControlledInputChange = (event) => {
    
        const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))

        const newPet = { ...pet } 

        let selectVal = event.target.value

        newPet[event.target.id] = selectVal
        newPet.userId = currentUser
        // update state
        setPet(newPet)
    }

    const handleClickSavePet = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
            addPet(pet)
                .then(() => history.push("/"))
            
    }

    return (

    <form className="petForm">
        <h2 className="petForm__title">New Pet</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Pet name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Pet Name" value={pet.name} />
            </div>
        </fieldset>
      
        <fieldset>
            <div className="form-group">
                <label htmlFor="img">Pet Img: </label>
                <input type="url" id="img" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Pet Img" value={pet.img}/>
            </div>
        </fieldset>
       
        <button className="btn btn-primary"
            onClick={handleClickSavePet}>
            Save Event
        </button>

    </form>
    )
}