const sumAll = function(startNum, stopNum) {
    if ( !Number.isInteger(startNum) || !Number.isInteger(stopNum) || startNum < 0 ) return "ERROR";
    let sum = 0;
    let counter = startNum < stopNum ? startNum : stopNum;
    let ender = startNum < stopNum ? stopNum : startNum
    while ( counter <= ender ) {
        sum += counter;
        counter++
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
