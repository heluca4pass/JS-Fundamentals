const numberOfArguments = process.argv.length - 2;

// Use conditional statements (if/else if/else) to determine the message
// based on the *actual* number of arguments received in this specific execution.

if (numberOfArguments == 0) {
  console.log("No argument");
} 
else { // numberOfArguments > 1
  console.log(process.argv[2]);
}