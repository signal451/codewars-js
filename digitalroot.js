function digital_root(n) {
  let sum = "";

  if(sum.length === 1) {
    return sum;
  }

  let number = n.toString();

  for(let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }

  digital_root(parseInt(sum));
}



function root(num) {
  let counter = '' + num; 
  let sum = 0;
 
  if(counter.length !== 1) {
    for(let i = 0; i < counter.length; i++) {
      sum += parseInt(counter[i]);
    }
  }

  return sum >= 10 ? root(sum) : sum;
}

console.log(root(10));