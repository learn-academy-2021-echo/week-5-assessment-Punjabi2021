// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

// a describe method that lists the name of the function OR naming of the particular test.
describe("strReplace", () => {
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("Will replace the letter A with the number four using RegExp", () => {
    expect(strReplace(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(strReplace(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(strReplace(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

//write a code that took a number and replace it with a number

// b) Create the function that makes the test pass.

const codeWord = (string) => {
  let strReplace = string
    .replace(/a/gi, 4)
    .replace(/e/gi, 3)
    .replace(/i/gi, 1)
    .replace(/o/gi, 0);

  return string;
};
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const letterA = "a";
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]
// a describe method that lists the name of the function OR naming of the particular test.
describe("newArray", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("creats a filter that verifies perticular letters inside of the words in the array", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(newArray(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(newArray(arrayOfWords2)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
// b) Create the function that makes the test pass.

const filterWord = (array) => {
  let newArray=array
const result = words.filter(word => word.include(a))
  return array;

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false

//take the hand and use a higher order function that can verify of the hand is a thee of  a kind with a matching pair

// b) Create the function that makes the test pass.
const resultLogic = {
    fiveOfAKind: () => {
        for(let i = 0; i <= 1; i++){
            let count = 1;
            for(let j = i + 1; j < diceArray.length; j++){
               if(diceArray[i] == diceArray[j])
                 count++;
           }
            if(count == 5)
             return true;
          }
           return false;
    },
    fourOfAKind: () => {
            for(let i = 0; i <= 1; i++){
              let count = 1;
              for(let j = i + 1; j < diceArray.length; j++){
                 if(diceArray[i]==diceArray[j])
                   count++;
             }
              if(count == 4)
               return true;
            }
             return false;
    },
    fullHouse: () => {
        return false;
         if threeOfAKind === true && pair === true
    },
    sixHighStraight: () => {
        // if diceArr === 2,3,4,5,6. There should always be a 6, never a 1 and every dice should be different
        if (diceArray.includes(2) && diceArray.includes(3) && diceArray.includes(4) && diceArray.includes(5) && diceArray.includes(6)) {
            return true;
        }
        return false;
    },
    fiveHighStraight: () => {
        // if diceArr === 1,2,3,4,5. There should never be a 6 and every dice should be different
        if (diceArray.includes(1) && diceArray.includes(2) && diceArray.includes(3) && diceArray.includes(4) && diceArray.includes(5)) {
            return true;
        }
        return false;
    },
    threeOfAKind: () => {
        for (let i = 0; i <= 3; i++) {
            let count = 1;
            for (let j = i + 1; j < diceArray.length; j++) {
                if (diceArray[i] == diceArray[j])
                    count++;
            }
            if (count == 3)
                return true;
        }
        return false;
    },
    twoPair: () => {
        for (var i = 0; i < diceArray.length; i++) {
            var count = 1;
            var pairs = 0;
            for (var j = i + 1; j < diceArray.length; j++) {
                if (diceArray[i] == diceArray[j])
                    count++;
            }
            if (count == 2) {
                pairs++;
                let firstPair = [];
                console.log(diceArray);
                console.log(`i = ${i} j = ${j}`);
                return true;
            }
        }
        return false;
    }
     if diceArr contains pair x 2
            for (var i = 0; i <= 1; i++) {
                var count = 1;
                for (var j = i + 1; j < diceArray.length; j++) {
                    if (diceArray[i] == diceArray[j])
                        count++;
                } if (count == 2) {
                    count = 0;
                    console.log(diceArray);

                    diceArray.splice(i, i + 1) && diceArray.splice(j, j + 1);
                    console.log(diceArray);
                    for (var i = 0; i <= 1; i++) {
                        var count = 1;
                        for (var j = i + 1; j < diceArray.length; j++) {
                            if (diceArray[i] == diceArray[j])
                                count++;
                        } if (count == 2) {
                            return true;
                        }

                    }
                    return false;
                }
            }
        return false;
     }
    ,
    pair: () => {
        for (let i = 0; i < diceArray.length; i++) {
            let count = 1;
            for (let j = i + 1; j < diceArray.length; j++) {
                if (diceArray[i] == diceArray[j])
                    count++;
            }
            if (count == 2)
                return true;
        }
        return false;
    }
}
