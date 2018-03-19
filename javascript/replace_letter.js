//Split Example
let name = "Winston"

const replaceLetter = (word) => {
  let splitWord = word.split("");
  for (let i = 0; i < splitWord.length; i ++) {
    if ((splitWord[i] == "s") || (splitWord[i] == "S")) {
      splitWord[i] = "5"
    }
  }
  console.log(splitWord);
  word = splitWord.join("");
  console.log(word);
};

replaceLetter("Skittles");
