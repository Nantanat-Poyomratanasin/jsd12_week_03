import readline from "readline";

function IsOddOrEven(num) {
  return num%2;
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter number:", function (numInput) {
  const num = parseFloat(numInput);
  
    if (Number.isInteger(num)) {
        let result = IsOddOrEven(num);

        // if statement
        if (result === 0) {
        console.log(`${num} is even number`);
        } else {
        console.log(`${num} is odd number`);
        }
  } else {
    console.log("Invalid number! Please enter an integer.");
  }
    rl.close();
  });
