function evenFibonacciNumbers() {
  let f0: number = 1;
  let f1: number = 1;
  let f2: number = 0;
  let sum = 0;

  while (f1 < 4000000) {
    if (f1 % 2 === 0) {
      sum += f1;
    }
    f2 = f1 + f0;
    f0 = f1;
    f1 = f2;
  }

  return sum;
}

console.log(evenFibonacciNumbers());
