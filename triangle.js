let side1 = 3;
let side2 = 4;
let side3 = 5;

let s = (side1+side2+side3)/2;
let areaValue = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

console.log("The area of the triangle is " + areaValue);