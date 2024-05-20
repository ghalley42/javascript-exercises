const leapYears = function(year) {
   if ( year % 4 != 0 ) return false
   if ( Number.isInteger( year / 100 ) && !Number.isInteger( year / 400 ) ) {
        return false
   }
   else {
    return true
   }
}

// Do not edit below this line
module.exports = leapYears;
