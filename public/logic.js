
// Test från föreläsning. Vill inte radera för att 
// kunna gå tillbaka och kolla på. 

fetch("http://localhost:3000/dogs").then((response) => {
    return response.json()
}).then((dogs) => {
    console.log(dogs)
    showAllDogs(dogs)
    findDog(dog)
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

function findDog(dog){
    const id = document.getElementById("dogId").value
    console.log(id);

    let specificDog = document.getElementById("specificDog")
    specificDog.innerHTML = ""
    
    if(dog) {
        
    } else {
        let errorResponse = document.createElement("h4")
        errorResponse.innerText = "Det finns ingen hund med detta nummer :/"
        specificDog.appendChild(errorResponse)
    }
    

}

