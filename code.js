function fib(n) {
        if (n == 0)
        return [0];
    if (n == 1)
        return [0,1];
    var array = fib(n-1);
    array.push(array[n - 2]+array[n - 1]);
    return array;
}
