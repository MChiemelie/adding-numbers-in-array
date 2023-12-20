const nums = [4, 3, 7, 4, 5, 5, 4];

function add(nums) {
   let sum = 0;
   return nums.map(num => sum += num);
}

console.log(add(nums));
