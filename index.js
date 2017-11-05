// Code your solutions in this file
function printBadges(array){
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
    window.print(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}
