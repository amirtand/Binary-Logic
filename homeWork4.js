// write a code for 5, 10, 15, 20 ........ 450;       // create function of question1
const num1 = 5;
const num2 = 450;

function questionOne(start, end, increment) {
    for (let i = start; i <= end; i += increment) {
        console.log(i);
    }
}

questionOne(num1, num2, num1);



console.log("-----------------------------------");

// write a code 333, 330, 327, ........... 30;        // create function of question2

function questionTwo(){
    for(let i =5; i<=450; i++){
        console.log(i);


    }
}
questionTwo(5,450)

console.log("-----------------------------------");
// find a even numbers between 50 and 150;            // create function of question3
function questionThree(){
    for(let k =50; k<=150; k++){
        console.log(k + " even");
        console.log(k + " odd");

}
}
console.log("-----------------------------------");
questionThree (50,150)


// Any type loop is fine
// find a leap years from 1900 to current year(2024). //create function of question4
console.log("-----------------------------------");


for( let i =1900; i <=2024; i = i+4){
    console.log(i);
 }