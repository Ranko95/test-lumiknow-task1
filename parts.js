function parts(arr) {
  const sum = arr.reduce((acc, val) => {
    if (val >= 0) {
      return acc + val
    } else {
      throw new Error('Part cannot be negative!')
    }
  }, 0); // Общая сумма всех частей

  const coef = 100 / sum;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i] * coef).toFixed(3);
  }
  
  return arr;
}

console.log(parts([2, 7, 2.2, 3.8, 4]));
