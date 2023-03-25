// function reverseNumber(num) {
//   let reverse = 0;
//   let remainder;

//   while (num > 0) {
//     remainder = num % 10;
//     reverse = reverse * 10 + remainder;
//     num /= 10;
//   }
//   return reverse;
// }
// let num = 65954;
// console.log(reverseNumber(num));

// let number = 123456789;
// let result = 0;

// while(number>0){
//     rightmost = number%10;

//     result = result*10+rightmost;

//     number = Math.floor(number/10);
// }

// console.log("The reverse number is " + result);

var reverse = function(num) {
    let myRevNum = num.toString().split("").reverse().join("");

    if(myRevNum.endsWith("-")){
        myRevNum = "-" + myRevNum;
        return parseInt(myRevNum);
    }else{
        return parseInt(myRevNum);
    }
};
console.log(reverse(-123));