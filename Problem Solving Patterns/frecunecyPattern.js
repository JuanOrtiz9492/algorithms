function compareSqare (arr1, arr2) {
  let collection = {}
  for(let i=0; i<= arr1.length; i++){
    let squared = arr1[i] * arr1[i]
    collection[squared] = collection[squared] ? collection[squared] + 1 : 1
  }
  for(value of arr2){
    if(collection[value]){
      collection[value]--
    } else {
      return false
    }
  }
  return true
}
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  let frecuencyCounter1 = {}
  let frecuencyCounter2 = {}

  for (const val of arr1) {
    frecuencyCounter1[val] = (frecuencyCounter1[val] || 0) +1
  }
  for (const val of arr2) {
    frecuencyCounter2[val] = (frecuencyCounter2[val] || 0) +1
  }

  for (const key in frecuencyCounter1) {
    if (!(key ** 2 in frecuencyCounter2)) {
      return false
    }
    if(frecuencyCounter2[key**2] !== frecuencyCounter1[key]){
      return false
   }
  }
  return true
}

console.log(same([2,4,6],[4,36,16]))
