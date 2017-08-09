const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let data = [];

rl.on('line', function(num){
  data.push(num);
  if (data.length === 3) {
    console.log(output(data));
  }
});

const output = (data) => {
  const arr0 = data[1].split(' ').map(item => +item);
  const arr1 = data[2].split(' ').map(item => +item);

  let index0 = 0;
  let index1 = 0;
  let maxSum = arr0[index0] + arr1[index1];
  let maxItemOfArr0Temp = arr0[index0];
  let maxItemOfArr0 = maxItemOfArr0Temp;

  const mappedArray0 = [arr0[0]];
  for (let i = 1; i < arr0.length; i++) {
    mappedArray0.push((arr0[i] > mappedArray0[i - 1]) ? arr0[i] : mappedArray0[i - 1]);
  }

  for (let j = arr1.length - 1; j >= 0 ; j--) {
    maxItemOfArr0Temp = mappedArray0[j];
    if (arr1[j] + maxItemOfArr0Temp >= maxSum) {
      maxSum = arr1[j] + maxItemOfArr0Temp;
      index1 = j;
      maxItemOfArr0 = maxItemOfArr0Temp;
    }
  }

  index0 = arr0.indexOf(maxItemOfArr0);

  return [index0, index1].join(' ');
};


