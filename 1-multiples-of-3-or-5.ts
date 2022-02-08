function sumMultiple() {
  let sum = 0;
  for (let i = 3; i < 1000; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      console.log(i);
    }
  }
  return sum;
}

console.log(`Sum of all the multiples of 3 or 5 below 1000 is: ${sumMultiple()}`);
