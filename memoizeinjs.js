const cache = {};

function add(num){
  if(cache[num]){
    console.log('from cache');
    return cache[num];
  }else{
  console.log('from regular function');
    return cache[num] = num + 10;
  }
}

console.log(add(20));
console.log(add(30));
console.log(add(40));
console.log(add(20));

/* video */
/* https://www.youtube.com/watch?v=O7n9w_f9u9A */

function fibo(num, cache={}){
	if(cache[num]) return cache[num];
  if(num === 0) return 0;
  if(num === 1 || num === 2) return 1;
  return cache[num] = fibo(num-2) + fibo(num-1);
}

console.log(fibo(20));
