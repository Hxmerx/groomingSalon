const readline = require('readline-sync');

// setup pet factory function
function createPetGuest(nom, species, birthDay) {
    return{
        nom,
        species,
        birthDay
    }
}

// initial prompt
function initialPrompt(){
    const welcome = readline.question("Welcome to pet groomers salon! Would you like to register your pet for a salon appointment? Y/N")
    if (welcome === "Y") { 
       console.log("great welcome!")
        collectInput()
    }
    else if(welcome === "N") {
        console.log("Your loss, you filthy animal!")
    }
    else console.log("Please use a valid entry")
}

// collect input

function collectInput() {
    const nom = readline.question("What is your pet's name?")
    const species = readline.question(`Welcome ${nom}! What species is ${nom}?`)
    const birthDay = readline.question(`Last question, what is ${nom}'s birthday?`)
   
   return pet1 = createPetGuest(nom, species, birthDay)
}
// validate input coming in and give an error if input is invalid 
// // export object to database

//   Ask user to choose from available appointments and make a reservation


  module.exports = {
    'initialPrompt': initialPrompt,
    'createPetGuest': createPetGuest,
    'collectInput': collectInput
}