var sum = 0;

function addThree(){
    sum = "";
    if (typeof sum != "undefined") {
        sum += "sum from addThree: " + 3;
    }
    console.log(sum);
}

function addFive(){
    sum = "";
    if (typeof sum != "undefined") {
        sum += "sum from addFive: " + 5;
    }
    console.log(sum);
}

addThree();
addFive();

module.exports = {
    addThree,
    addFive
};