


/*Write a function that takes a string as input and returns the number of vowels in the string.*/
let string = "Hello World";
function vowels(string) {
let count = 0;
let vowels =  ["a", "e", "i", "o", "u"];
for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
        count++;
    }
}
return count;
}
console.log(string);
let result2 = vowels(string);
console.log(result2)
