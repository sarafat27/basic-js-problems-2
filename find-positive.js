var numbers = [79, 156, 45, 198, -9, 33, 108];
function getPositive(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > 0) {
            newArray.push(element);
        }
        else {
            break;
        }
    }
    return newArray;
}

let positiveNumbers = getPositive(numbers);
console.log(positiveNumbers);