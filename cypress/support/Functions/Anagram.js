//Function to tell if string 1 is an anagram of string 2

let isAnagram = function (str1, str2) {
    //Split string into array, sort alphabetically, put it back together and make it lowercase
    let sorted1 = str1.split('').sort().join('').toLowerCase()
    let sorted2 = str2.split('').sort().join('').toLowerCase()
    //Compare them
    return (sorted1 === sorted2);
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));