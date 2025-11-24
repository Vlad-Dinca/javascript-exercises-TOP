const reverseString = function(string) {
    let newString = "";
    string = string.split("");
    
    for (let i = 1; i<=string.length;i++){
        newString += string[string.length-i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
