let n = 10;
let fibonacciSeries = [0, 1];

for (let i = 2; i < n; i++) {
  fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
}

console.log("Fibonacci Series: " + fibonacciSeries.join(", "));
