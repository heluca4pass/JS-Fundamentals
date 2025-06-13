//const numberOfArguments = process.argv.length - 2
//const arg1 = process.argv[2];
//let num =parseInt(process.argv[2])
if (!Number.isNaN(parseInt(process.argv[2]))) {
  console.log("My number: ", parseInt(process.argv[2]))
} 

else {
    console.log("Not a number")
}