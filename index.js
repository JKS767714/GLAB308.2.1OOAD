// //Part 1 s an additional practice exercise, 
// create a loop that logs each item in Robin’s inventory.

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
//     }
  // completed the request to loop over inventort
//    console.log(adventurer.inventory.forEach((e) => {
//     console.log(e)
// })) 

// Added an object
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
//     }

// Next, give Robin’s feline friend a friend of his own:
// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             invemtory: ["small_hat", "sunglasses"]
//         }
    
//     }

//     }

//give Robin a method

    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat",
            companion: {
                name: "Frank",
                type: "Flea",
                invemtory: ["small_hat", "sunglasses"],
            },
        
        },
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
    
        }

    //    console.log(adventurer.roll())
    //    console.log(adventurer.roll())

       //Part 2

       class Character {

           constructor(name){
               this.name = name,
               this.health = 100,
               this.inventory = []   
           }
           roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }
            static MAX_HEALTH = 100
            static ROLES = ["fighter", "healer", "wizard"]
       }



       const j = new Character("Jermaine")
       j.inventory = ["sword", "potion", "artifact"]
       j.companion = new Character("Leo")
    //    console.log(j)
         
       
// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

//Part 3
//add a propert and a methods
class Adventurer extends Character {
    constructor (name, role, title) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      //Adventurers have titles
      this.title = title;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    dig (){ 
        console.log(`${this.name} wass digging.....`)
    }
    duel(opponent) {
        const oppRoll = opponent.roll();
        const myRoll = this.roll();

        if(myRoll > oppRoll){
            opponent.health -= 1;
            console.log("opponent lost 1")
        } else  {
            this.health -= 1;
            console.log("i lost 1")
        }

        // Use the roll() functionality to create opposing rolls for each adventurer.
        // Subtract 1 from the adventurer with the lower roll.
        // Log the results of this “round” of the duel, including the rolls and current health values.
        // Repeat this process until one of the two adventurers reaches 50 health.
        // Log the winner of the duel: the adventurer still above 50 health.


    }
  }


  //Next, create a Companion class with properties and methods specific to the companions.
// Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.

class Companion {
    constructor(age, gender){
        this.age = age,
        this.gender = gender
    }

    lift(){
        console.log(`This ${this.age} year old ${this.gender} can lift 500 pounds`)
    }
}

// const batman = new Adventurer("Batman")

// console.log(batman)

// Part 4
//Part 6
// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.


const misha = new Adventurer("misha")
const jason = new Adventurer("jason")
console.log(misha.duel(jason))
