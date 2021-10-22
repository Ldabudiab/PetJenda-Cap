import React, { useState } from "react";
import { useHistory } from "react-router";
import { addPet } from "../../modules/PetManager";
import axios, { Axios } from "axios";


export const PetForm = () => {
    const currentUser = parseInt(sessionStorage.getItem("petjenda_user"))
    const [pet, setPet] = useState({
        name: "",
        img: "",
    });

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
    
        

        const newPet = { ...pet } 

        let selectVal = event.target.value

        newPet[event.target.id] = selectVal
        newPet.userId = currentUser
        // update state
        setPet(newPet)
    }

    const uploadImage = async (e) => {
        debugger
        const files = e.target.files;
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "nfyot9vo")

        // axios.post("https://api.cloudinary.com/v1_1/dzzvsnjjc/image/upload", formData)
        const res = await  fetch(
            "	https://api.cloudinary.com/v1_1/dzzvsnjjc/image/upload",
            {
              method: "POST",
              body: data,
            }
          );
        const file = await res.json();
        setImage(file.secure_url);
        setLoading(false);
    };

    const handleClickSavePet = (event) => {
            const newPet = {
                name: pet.name,
                img: image,
                userId: currentUser
            }
            addPet(newPet)
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
                <input type="file" name="file" onChange={(event)=> {uploadImage(event);}} required autoFocus className="form-control" />
                
            </div>
        </fieldset>
       
        <button className="btn btn-primary"
            onClick={(evt) =>{
                evt.preventDefault();
                handleClickSavePet();
                // uploadPic();
                // toggle();

            }
            }>
            Save Event
        </button>

    </form>
    )
}