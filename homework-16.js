function fib(n) {
  if (!fib.cache) {
    fib.cache = {};
  }

  if (fib.cache[n] === undefined) {
    fib.cache[n] = ;
  }

  return fib.cache[n];
}

