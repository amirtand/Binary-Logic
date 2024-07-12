//oprator

/// Assignment Opreators
    //= , += , -=, *= , /=, %= , **=
//Comparison Opreator
    //==, ===, !=(Not Equal) , !== , > , < , >= , ,+
///logical operators
    // AND=> && , OR=> ||  ,  NOT=> !
//Ternary Operators
    // ?

//Arithmetic Operators
    //+ , - , * , / , %(moduls) , ++ , --
    // %(modules) will give yiu the remainder of two values.
let a = 20;
let b= 30;

let sum = a+b;
console.log(sum);
let sub = b-a;
console.log(sub);

let mul =a*b;
console.log(mul);
let div = a/b; // 20/30
console.log(div);

    // % modulus = remaining of multyipication

    let c=2;
    let d=20;
    let e=25;
    let f=31;
    console.log( d % c);
    console.log(e % c);
    console.log(f % c);


    //++ , --
    let h= 10;
    h++;//h=h+1
    console.log(h); //11
    h--;
    console.log(h);//10
    h--;
    h--;
    console.log(h); //8

    let i = 20;
    i++; //21
    i++;//22
    h++; //9

    console.log(i+h); //22+9 = 31
    console.log(i,h);
    //         22+9+10= 41

let j = i++ + h++ + 10; //41 , 21+1 , 9+1
console.log(i , h);

//23+1 + 10+1 + 10

let k = ++i + ++h + 10;
console.log(k); //45

/// Assignment Opreators
    //= , += , -=, *= , /=, %= , **=
let l =10;
l +=20; // l= l+20;
console.log(l); //30

console.log(l); //30

l -=5;// l=l-5 => 30 - 5 = 25
console.log(l); //25

l *=5;  // l = l*5 => 25 * 5 = 125

console.log(l); //125

l/=25;
console.log(l); //5
 
l %=2;    // l = l % 2 = 1
console.log(l); // 1

l +=2;

console.log(l); //3

let m =5;
l +=m; // l = l+m;

console.log(l); //8

//Comparison Opreator
    //==, ===, !=(Not Equal) , !== , > , < , >= , ,+
    /// any comparison output will always be a boolean output (true or false)
    let o= 10;
    let n=11;
    console.log(n==o); //false
    console.log(o == 10); //true
    console.log(n== 15); // false
    console.log("-----------------"); // false
    console.log(10 == "10"); // true // value same it will considers equals even if type diffrent
    console.log(10 === "10"); // false // check the both value type of value.



///not Equal
console.log(o != n); // true
console.log(o != 15); // true
console.log(n != 15); // false

console.log(10 !=="10"); // true
        //(10, number) (10 String)

        console.log(10 < 10); // false
        console.log(10 <= 10); // true
        console.log(10 >= 10); // true
        console.log(10 > 10); // false

///logical operators
    // AND=> && , OR=> ||  ,  NOT=> !

    





    console.log((("blue" == "blue") && (5>2)) || ((65 % 5 == 0)) && (((16 >= 16))));


    console.log(true && ( 6*2 >= 15) || (5+10 === 15));

    console.log((("a" === "a") || ("b"=="b")) &&! (("c" == "d")) || ((("d" !="e"))));

/// Ternary Operator

console.log( 10 == 10 ? "equal" : "not equal");
console.log(10 % 2 == 0 ? "even" : "odd");  



    





    