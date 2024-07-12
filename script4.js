




let a =35;
let b= 15;
if(a>b){
    console.log("A is bigger than B")
}else{
    console.log("B is bigger than A")
}

let num1 = 135;

if(num1%2==0){
    console.log("even number")
}else{
    
console.log(" odd number")
}

let time = 8;

if(time==8){
    console.log("lets go for dinner")
}else if(time < 8){
    console.log("it is early")
}else if(time>8){
    console.log("Sorry Late")
}

let trafficLight = "pink";

if(trafficLight=="red"){
    console.log("Stop");
}else if(trafficLight=="green"){
    console.log("Go");
}else if(trafficLight=="yellow"){
    console.log("Slow Bitch");
}else {
    console.log("Invalid");
}




for( let num=50; num<=350; num++){
    console.log(num);
}

//////////////////////////////////
for(let x=5; x<=450; x= x+5){
    console.log(x);
}
//////////////////////////////////


console.log("--------------------------------")

for(let y=333; y>=30; y= y-3){
    console.log(y);
}

for( let i=50; i<=150;  i++){
    if(i %2 ==0){
    console.log(i + "even");
}else{
    console.log(i + "odd");
}

}  

//While Loop
//While(condition){

//}

let c=1;

while(c<=10){
    console.log(c);
    c++;
}

console.log("========================================");


let d =500;
while(d>=400){
    console.log(d);
    d--;
}

let f = 50;
while(f<=350){
    console.log(f);
    f++;
}

function checkInput (input){
    if(input % 5== 0){
        console.log("yeas it is divisible by 5");
    }else
    console.log("No it is notis divisible by 5")
}

checkInput(20);
checkInput(40);
checkInput(33);
checkInput(25);

// if you want get output after complete its task we use "Return" keyword

function getMulTwoNumbers (num1,num2){
    let mul = num1*num2;
    return mul;
}

let output = getMulTwoNumbers(10,20);
console.log(output);

let output2 = getMulTwoNumbers(5,15);
console.log(output2);