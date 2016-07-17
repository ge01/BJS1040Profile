//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var loopTotal = 0;
  for (var j=0; j<contacts.length; j++)
  {
  //console.log(contacts[j]);
    //loopTotal += j;
    if (contacts[j].firstName == firstName && contacts[j].hasOwnProperty(prop) === true) {
        //  console.log(contacts[j]);
      return contacts[j][prop];
    } else if (contacts[j].firstName == firstName && contacts[j].hasOwnProperty(prop) === false) {
      return "No such property";
    } //else {
      //return "No such contact";
    //}

    //else if (loopTotal == contacts.length - 1){
      //return "No such contact";
  //  }
  /*
    else if (contacts[j].firstName != firstName) {
      //console.log(contacts[j]);
    return "No such contact";
    } else {
      //console.log(contacts[j]);
    return "No such property";
    }
    */
  }
}
/*
  for(var i=0; i<4; i++){
    console.log(contacts[i]);
    if (contacts[i].firstName == firstName &&
        contacts[i].hasOwnProperty(prop) === true) {
      return contacts[i][prop];
      //console.log(contacts[0][prop]);
    } else if (contacts[i].firstName != firstName) {
      return "No such contact";
    } else {
      return "No such property";
    }
  }
*/
// Only change code above this line


// Change these values to test your function
console.log(lookUpProfile("Akira", "address"));



//console.log(contacts[0].firstName);
//console.log(contacts[0]);
//console.log(contacts[0].hasOwnProperty("likes"));
//console.log(contacts.length);
