//solution 1:
console.log(addNumbers(7 ,99));
    function addNumbers(num1, num2){
        return num1 + num2;
    }

//solution 2:
console.log(multiplyNumbers(88, 90));
function multiplyNumbers( num1, num2){
    return num1 * num2; //7920
}

//solution 3:
function addNumbers (num1, num2){
    var  sum;
    sum = num1 + num2;
    return sum;

}
console.log(addNumbers(8, 70)); // 78

//solution 4:
{
    console.log(a); // undefined
    console.log(b); // referenceError
    console.log(c); // referenceError

    let a = "arpit";
    var b = "gupta";
    const c = "!";

    console.log(a); // arpit
    console.log(b); // gupta
    console.log(c); // !
}


//solution 5:
{
console.log(r); //referenceError

 let r = "PW skills";

console.log(r); // PW skills
}
