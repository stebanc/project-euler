/* eslint-disable no-console */
function largestPrimeFactor() {
  let n = 600851475143;
  let largest: number = 0;
  for (let i = 2; n > 1; i += 1) {
    while (n % i === 0) {
      n /= i;
      largest = i;
    }
  }
  return largest;
}

console.log(largestPrimeFactor());
