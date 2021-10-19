const remoteURL = "http://localhost:8088"

export const addPet = (newPet) => {
    return fetch(`${remoteURL}/pets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    }).then(response => response.json())
  }

  export const getAllPets = () => {

        return fetch(`${remoteURL}/pets`)
        .then(res => res.json())
  }

  export const deletePets = (id) => {
    return fetch(`${remoteURL}/pets/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

  export const update = (editedPet) => {
    return fetch(`${remoteURL}/pets/${editedPet.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPet)
    }).then(data => data.json());
  }
  