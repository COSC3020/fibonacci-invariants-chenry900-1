function fib(n) {
  if (n == 0)
    return [0];
  if (n == 1)
    return [0,1];
  var array = fib(n-1);
  array.push(array[array.length - 2]+array[array.length - 1]);
  return array;
}
