function myfirstfuntion(){
    console.log('this is my first function');
}

myfirstfuntion();
function addfournumbers(a, b, c, d){
    let result = a + b + c + d ;
    console.log(result);
}
addfournumbers(12, 25, 34, 56);
function squarecalculator(x){
    return  x*x;
}

console.log(squarecalculator(10));


// Get the password and confirmed password values from the user
const password = ("Enter your password:");
const confirmedPassword = ("Confirm your password:");

// Check if the passwords match
if (password === confirmedPassword) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful.");
}

(function(name){
  console.log("greetings", name)//an example iefe(immediately envoked function execution)
})("Arpit");

let x = function(){
  console.log('unnamed')// an example of annonymous function
};
x();
