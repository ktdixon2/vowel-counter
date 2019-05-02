var countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log("Sentence with", countVowels('This is a new sentence'),"vowels." ); 

