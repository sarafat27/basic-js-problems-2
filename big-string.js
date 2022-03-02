var myFriends = ["emon", "rakib", "sarafat", "iftekhar", "sunny", "sakib"];
function bestFriend(array) {
    let longest = array[0];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element.length > longest.length) {
            longest = element;
        }
    }
    return longest;
}

let longestName = bestFriend(myFriends);
console.log(longestName);
