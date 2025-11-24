const removeFromArray = function(array, ...rest) {
    let j = 0
    let caught = false; 
    for (let i = 0; i<= array.length; i++){
        if (array[i] === rest[j] && array[i] != undefined){
            array.splice(i, 1);
            caught=true
            i--;
        }
        else if (caught === true && array.length === i  && rest[j]!= undefined){
            // j++;
            rest.splice(j, 1);
            i=0;
            caught = false;
        } 
        else if (i === array.length && caught === false && rest[j] != undefined){
            // j++;
            rest.splice(j, 1);
            i=0;
        }
        
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
