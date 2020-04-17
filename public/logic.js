fetch("http://localhost:3000/dogs").then((response) => {
    return response.json()
}).then((dogs) => {
    showAllDogs(dogs)
})

function showAllDogs(dogs){
    let allDogs = document.getElementById("allDogs")

    dogs.forEach(dog => {
       
        let dogBreed = document.createElement("h4")
        let dogAge = document.createElement("h4")
        dogBreed.innerText = dog.breed
        dogAge.innerText = dog.age

        let dogDiv = document.createElement("div")
        dogDiv.appendChild(dogBreed)
        dogDiv.appendChild(dogAge)

        allDogs.appendChild(dogDiv)


    });
}

function getFindDog(){
    const id = document.getElementById("dogId").value
    fetch("http://localhost:3000/dogs/" + id).then((response) => {
        if(response.status === 404){
            printFindDog() 
        } else {
            return response.json()
        }
    }).then((dogs) => {
    console.log(dogs)
    printFindDog(dogs)
    printAddDog(dog)
})
}


function printFindDog(dog){
    const id = document.getElementById("dogId").value
    console.log(id);

    let specificDog = document.getElementById("specificDog")
    specificDog.innerHTML = ""
    
    if(dog) {
        let dogBreed = document.createElement("h4")
        dogBreed.innerText = dog.breed
        let dogAge = document.createElement("h4")
        dogAge.innerText = dog.age

        let dogDiv = document.createElement("div")
        dogDiv.appendChild(dogBreed)
        dogDiv.appendChild(dogAge) 

        specificDog.appendChild(dogDiv)
    } else {
        let errorResponse = document.createElement("h4")
        errorResponse.innerText = "Det finns ingen hund med detta nummer :/"
        specificDog.appendChild(errorResponse)
    }
}



