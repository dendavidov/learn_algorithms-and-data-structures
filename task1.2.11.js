const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(num){
  console.log(getMultipliers(+num));
});

const primesCache = {
  1: false,
};

const isPrime = (num) => {
  if (typeof primesCache[num] === 'boolean') return primesCache[num];
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      primesCache[num] = false;
      return false;
    }
  }
  primesCache[num] = true;
  return true;
};

const getMultipliers = (num) => {
  const multipliers = [];
  let i = 2;
  while (i <= num) {
    if (isPrime(i) && num % i === 0) {
      multipliers.push(i);
      num = num / i;
    } else {
      i++;
    }
  }

  return multipliers.join(' ');
};



