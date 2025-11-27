const fibonacci = function(num) {
    
    if (typeof(num) !== "number")
        num = parseInt(num);
    if (num < 0)
        return "OOPS"
    if (num === 0)
        return 0;
    
    // let fibo;
    first = 1;
    prev = 0;
    for(let i = 2 ; i<= num; i++){
        let fibo = first + prev;
        prev = first;
        first = fibo;  
    } 
    return first;       

};

// Do not edit below this line
module.exports = fibonacci;
