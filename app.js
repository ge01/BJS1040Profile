//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
if (contacts[0].firstName == firstName && contacts[0].hasOwnProperty(prop) === true) {
  console.log(contacts[0].likes);
}
// Only change code above this line
}

// Change these values to test your function
//lookUpProfile("Akira", "likes");
//console.log(contacts[0].firstName);
console.log(contacts[0]);
console.log(contacts[0].hasOwnProperty("likes"));
