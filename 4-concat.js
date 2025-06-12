const numberOfArguments = process.argv.length - 2;
const arg1 = process.argv[2];
const arg2 = process.argv[3];
if (numberOfArguments == 2) {
  console.log(arg1, "is", arg2);
} 
else if (numberOfArguments == 1)
{ 
  console.log(arg1, "is", undefined);
}
else {
    console.log(undefined, "is", undefined);
}