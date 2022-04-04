function randomInteger(){
    var num = Math.floor(Math.random() * 30);
    return num;
}

console.log(randomInteger());
module.exports = randomInteger;