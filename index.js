function isPalindrome(word) {
  // Write your algorithm here
  word = word.replace(/\W/g, '')
  word = word.toLowerCase();
  return word === word.slpit('').reverse().join('');
}
console.log(isPalindrome(word));

/* 
  Add your pseudocode here
  Start
input;
if input.split('')===input.split('').reverse().join;
return true;
else return false
end
*/



/*
  Add written explanation of your solution here
  the user key in Data, the program therefore 
splits data into characters. the splited data is 
compared with the reverse of itselt, if both the indexes of the string matches,
the return value is true, else the return value is false
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
