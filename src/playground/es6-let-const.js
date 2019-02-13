var nameVar = 'Adam'; 
var nameVar = 'Mike'; 
console.log('nameVar', nameVar); 

let nameLet = 'Sarah'; 
nameLet = 'Julie';
console.log('nameLet', nameLet); 

const nameConst = 'Frank'; 
console.log('nameConst', nameConst); 

// Block scoping 
var fullName = 'Adam Mathison'; 
let firstName; 

if(fullName){ 
    firstName = fullName.split(' ')[0]; 
    console.log(firstName);
}

console.log(firstName); 
