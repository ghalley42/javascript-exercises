const repeatString = (string, repeats) => {
    if ( repeats < 0 ) return 'ERROR';
    let counter = 0;
    let newString = "";
    while ( counter < repeats ) {
        newString += string;
        counter++;
    }
    return newString;
}

// Do not edit below this line
module.exports = repeatString;
