
let person = prompt("Please enter your name:");

if (person == null || person == "") {
    text = "User cancelled the prompt.";
  }
let gender = prompt("Are you a: " , "Male, Female");

// while (gender !==  "male" && gender !==  "Male" && gender !==  "female" && gender !==  "Female") {
//     gender = prompt("Are you a: " , "Male, Female");
// }
function getGender() {
    var gender = "";
  
    while (gender.toLowerCase() !== "male" && gender.toLowerCase() !== "female") {
      gender = prompt("Are you a: ", "Male, Female");
    }
    if ( gender == "male"  ||  gender == "Male" ) {
        window.alert("Hello Mr. " + person );
        } else if (gender == "female"  ||  gender == "Female"){
                  window.alert("Hello Mrs. " + person); 
                 } else {
                  window.alert ("Hello  " + person);
                 }
    }
  getGender();


let typeOfDrink = prompt("would you like a hot or cold drink?", "Hot, Cold");
let nameOfDrink = prompt("Please write the name of your drink:");

let array = [];
array.push(person);
array.push(gender);
array.push(typeOfDrink);
array.push(nameOfDrink);
console.log(array);








// if ( gender == "male"  ||  gender == "Male" ) {
//   window.alert("Hello Mr. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//   console.log("Mr. " + person + drink);
//   } else if (gender == "female"  ||  gender == "Female"){
//             window.alert("Hello Mrs. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//             console.log("Mrs. " + person + drink);
    
//            } else {
//             window.alert ("Hello  " + person + ", your  " + drink + " is in the making. "+ "Thank you for your patience =)");
//             console.log( person + drink);  
//            }

// if (drink == null || drink == ""){
//     window.alert ("Invalid order");
// } else {
//     if ( gender == "male"  ||  gender == "Male" ) {
//         window.alert("Hello Mr. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//         console.log("Mr. " + person + drink);
//      } else if (gender == "female"  ||  gender == "Female"){
//         window.alert("Hello Mrs. " + person + ", your " + drink + " is in the making. "+ "Thank you for your patience =)");
//         console.log("Mrs. " + person + drink);

//      } else {
//         window.alert ("Hello  " + person + ", your  " + drink + " is in the making. "+ "Thank you for your patience =)");
//         console.log( person + drink);

//      }

// }

