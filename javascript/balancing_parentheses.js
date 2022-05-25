function balancingParentheses(string) {
  let opening = 0
  let missing = 0
  for(let i=0; i<string.length; i++){
     if (string[i] === '('){
         ++opening  // 1
         continue
     }

     if(opening > 0) {
        --opening
     }
     else {
       ++missing // 3
     }

  }

  return missing + opening

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 4");
  console.log(balancingParentheses(')))('));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// we need to iterate over each element and check how many is closing and openings
// the return value should show how many we are missing
// let assume that missing = 0 lets assume that missing is closing
//  if missing/closing  - openings = 0 (no missing)
// if missing/closing - opening = 1 (missing one )
// number should positive so i have increment missing every time
// let opening = 0 
// let missing = 0
/* (for ....) {
   if arr[0] = "("
   increment opening  // 3 openings
   increment missing   // 3 missings
} 
else {
  if there is no ")" it means it has to be "(" so we can decrement missing
  decrement missing  // there are 2 "(" so missing = 1
}

once loop stop running lets check
missing = 1
opening = 3

return missing 

*/

// And a written explanation of your solution
