function sumZero(arr1){
  let pos1 = 0;
  let pos2 = 1;
  while(pos1 < arr1.length - 2){
    let val1 = arr1[pos1]
    let val2 = arr1[pos2]
    if(val1 + val2 === 0){
      return [val1, val2]
    }
    if(val1 + val2 < 0){
      pos2++
    }
    if(val1 + val2 > 0 || pos2 === arr1.length){
      pos1++
      pos2 = pos1 +1
    }
  }
  return undefined
}

function countUniqueValues(arr){
let i = 0
let j = 1
let uniqueValues = []
while(i<arr.length){
  if(arr[i] !== arr[j]){
    uniqueValues.push(arr[i])
  }
  i++
  j++
}
return uniqueValues.length
}

console.log(sumZero([-5, -4, -3, -2, -1, 0 ,3]))

console.log(countUniqueValues([1,1,2,2,2,2,4,6,7,8,8,8,9,10,10,11]))