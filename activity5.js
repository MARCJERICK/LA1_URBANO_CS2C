// Declare a variable for the first name of the favorite actor
let favactorfirstname = "Joshua";

// Declare a variable for the last name of the favorite actor
let favactorlastname = "Garcia";

// Concatenate the first and last name to create the full name
let fullname = favactorfirstname + " " + favactorlastname;

// Convert the full name to uppercase
let uppercase = fullname.toLocaleUpperCase();

//message that includes the uppercase full name
let message = `My Favorite Actor is ${uppercase} `;

//additional text to the message about the actor's best show
message += "His best show is Vince & Kath & James";

// Log the variables
console.log(favactorfirstname);
console.log(favactorlastname);
console.log(fullname);
console.log(uppercase);
console.log(message);
