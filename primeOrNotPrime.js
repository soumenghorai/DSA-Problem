function checkPrime(num) {
  //   let num = 5;
  let flag = true;

  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    console.log(num + " is a prime number ");
  } else {
    console.log(num + " is a not prime number ");
  }
}
let num = 5;
checkPrime(num);
