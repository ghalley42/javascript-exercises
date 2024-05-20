const removeFromArray = function(array, ...args) {
    let counter = args.length - 1;
    let newArray = array;
        while ( counter >= 0) {
        let holderArray = newArray;
        newArray = holderArray.filter( i => i !== args[counter]);
        counter--;
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
