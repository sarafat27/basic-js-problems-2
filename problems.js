var myFriends = ["emon", "rakib", "sazzad", "sunny", "sakib"];

function oddFriends(array) {
    const odd = [];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.length % 2 == 1) {
            odd.push(element);
        }
    }
    return odd;
}
const odds = oddFriends(myFriends);
console.log(odds);