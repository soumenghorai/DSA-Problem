let num = 425;
let reversed = 0;
let remainder;
let original;

original = num;
// reversed integer is stored in reversed variable
while (num > 0) {
  remainder = num % 10;
  reversed = reversed * 10 + remainder;
  num /= 10;
}

// palindrome if orignal and reversed are equal
if (reversed == original)
 console.log(original + " is a palindrome.");
else
 console.log(original + " is not a palindrome.");


