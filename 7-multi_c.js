const x = process.argv[2]
if(!Number.isNaN(x)){
    for ( let i = 0; i<x; i++) {
        console.log('C is fun')
    }
}
else{
    console.log('Missing number of occurrences')
}