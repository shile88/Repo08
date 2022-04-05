function convertStrToInt(str){
    var a = parseInt(str, 16);
    return a;
}

console.log(convertStrToInt("BA"));
console.log(convertStrToInt("BA"));
console.log(convertStrToInt("F1"));
console.log(convertStrToInt("JeffBezos"));

module.exports = convertStrToInt;