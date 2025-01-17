var currentValue = 0;
var nextValue = 0;
var result = 0;
function num1() {
    console.log("Current value has been updated to 1");
    currentValue = 1;
    alert(currentValue);
}


function num2() {
    var currentValue = 2;
    alert(currentValue);
}

function addNumbers() {
    console.log(currentValue);
    console.log(nextValue);
    result = currentValue + nextValue;
    alert(result);
}

function clearResult() {
    result = 0;
    alert(result);
}

function showResult() {
    alert(result);
}