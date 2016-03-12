function sum() {
    var sum = 0;
    for (var i=0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number')
            sum=sum + arguments [i];
    }
    return sum;
} 

function min(arr) {
    if (typeof arr === 'undefined')
        return;
    var minValue = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i];
        }
    }
    return minValue;
}


function max(arr) {
    if (typeof arr === 'undefined')
        return;
    var maxValue = arr[0];
    for (var i=0; i < arr.length; i++) {
        if (maxValue < arr[i]){
            maxValue = arr[i];
         }
    }
    return maxValue;
}

