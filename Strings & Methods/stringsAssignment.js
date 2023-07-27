

// 1. Write a program that takes a string as input and prints the number of vowels in the string.

var sampleStr = "mohsin dyer"

var sampleArr = sampleStr.split('');

// console.log(sampleArr);

// console.log(sampleArr.length);
let count = 0;

for (let i = 0; i<sampleArr.length; i++)
{
    if (sampleArr[i] == 'a' || sampleArr[i] == 'e' || sampleArr[i] == 'i' || sampleArr[i] == 'o' || sampleArr[i] == 'u')
    {
        count++;
    }
}

console.log("The number of vowels is: ", count);

// 2. Write a program that takes a string as input and prints the string in reverse order.

console.log("String in reverse order is:", sampleArr.reverse().join(''));

// 3. Write a program that takes a string as input and prints the longest word in the string.

var sampleLongerString = "Mohsin Dyer goes to University"

var sampleLongerArr = sampleLongerString.split(" ");

// console.log(sampleLongerString.split(" "));

var longestWord = "";

for (let i = 0; i<sampleLongerArr.length; i++){
    // console.log(sampleLongerArr[i].length);
    if (sampleLongerArr[i].length > longestWord.length){
        var longestWord = sampleLongerArr[i];
}
}

console.log("Longest word is:", longestWord);

// 4. Write a program that takes a string as input and capitalises the first letter of each word.

var stringCap = sampleStr.split(" ");

for (let i = 0; i<stringCap.length; i++){
    stringCap[i] = stringCap[i][0].toUpperCase() + stringCap[i].substring(1);
}

console.log("Capitalised First Word:", stringCap.join(" "));

// 5. Write a program that takes two strings as input and determines if they are anagrams (i.e., they have the same letters in a different order).

var anagram1 = "angel";
var anagram2 = "glean";

var split1 = anagram1.split("");
var split2 = anagram2.split("");

split1 = split1.sort().join("");
split2 = split2.sort().join("");
// console.log(split1);
// console.log(split2);

if (split1 == split2) {
    console.log("These words are anagram!");
} else {
    console.log("These words are not anagram!");
}

// 6. Write a program that takes a string as input and removes all whitespace.

var remWhitespace = sampleLongerString;

var temp = remWhitespace.split(" ");
temp = temp.join("");

console.log("String without Whitespaces is:", temp);

// 7. Write a program that takes a string as input and prints true if the string is a palindrome (i.e., it reads the same forward and backward).

var stringPalindrome = "malayalam"

var arrPalindrome = stringPalindrome.split("");
stringPalindrome2 = arrPalindrome.reverse().join("");

console.log(stringPalindrome2);


if (stringPalindrome == stringPalindrome2){
    console.log("It is a palindrome");
} else{
    console.log("It is not a palindrome");
}

// 8. Undefined question

// 9. Write a program that takes a string as input and prints a new string with all the vowels removed.

var sampleArr1 = sampleStr.split('');

var removedVowels = "";

for (let i = 0; i<sampleArr1.length; i++)
{
    if (sampleArr1[i] == 'a' || sampleArr1[i] == 'e' || sampleArr1[i] == 'i' || sampleArr1[i] == 'o' || sampleArr1[i] == 'u')
    {
        sampleArr1.splice(i, 1);
    }
}

console.log("String with vowels removed is:", sampleArr1.join(""));

// 10. Write a program that takes a string as input and prints a new string with all the characters in reverse order, but with the first letter unchanged.

var sampleArr2 = sampleStr.split('');

var LengthofString = sampleArr.length;

var firstLetter = sampleArr2.shift();

var firstLetter = firstLetter.split("");

var reversedArr = sampleArr2.reverse();

reversedArr = firstLetter.concat(reversedArr);

console.log(reversedArr.join(""));

// 11. Write a program that takes a string as input and prints true if the string contains only digits.

var stringDigits = "1234567a890";

var output;

for (let i = 0; i<stringDigits.length; i++)
{
    var ascii = stringDigits.charCodeAt(i);
    if (ascii < 48 || ascii > 57)
    {
        output = false;
        break;
    }
    else{
        output = true;
    }
}

console.log("Contains digits only:", output);