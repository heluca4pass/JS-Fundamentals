const numberOfArguments = process.argv.length - 2;
//const arg1 = process.argv[2];
let num =+ process.argv[2]
if (Number.isNaN(num)) {
  console.log("Not a number:");
} 

else {
    console.log("My number ", num);
}