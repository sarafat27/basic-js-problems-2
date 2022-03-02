// problem 1

function anaToVori(ana) {
    if (ana < 0 || typeof ana != 'number') {
        return "please give a positive number";
    }
    var vori = ana / 16;
    return vori;
}
var voriQuantity = anaToVori(77);
console.log(voriQuantity);

// problem 2

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    if (singaraQuantity < 0) {
        return "please give a positive quantity of singara";
    }
    if (somuchaQuantity < 0) {
        return "please give a positive quantity of somucha";
    }
    if (jilapiQuantity < 0) {
        return "please give a positive quantity of jilapi";
    }
    // singara price calculation
    var perSingaraPrice = 7;
    var totalSingaraPrice = perSingaraPrice * singaraQuantity;
    // somucha price calculation
    var perSomuchaPrice = 10;
    var totalSomuchaPrice = perSomuchaPrice * somuchaQuantity;
    // jilapi price calculation
    var perJilapiPrice = 15;
    var totalJilapiPrice = perJilapiPrice * jilapiQuantity;
    // total price calculation
    var totalCost = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
    return totalCost;
}
var myCost = pandaCost(3, 2, 0);
console.log(myCost);

// problem 3

function picnicBudget(peoples) {
    var picnicCostFirstHundred = 5000;
    var picnicCostSecondHundred = 4000;
    var picnicCostForRest = 3000;
    if (peoples < 0) {
        return "please give a positive number of people";
    }
    else if (typeof peoples != 'number') {
        return "please don't give invalid input";
    }
    else if (peoples <= 100) {
        var totalBudget = peoples * picnicCostFirstHundred;
        return totalBudget;
    }
    else if (peoples <= 200) {
        var budgetFirstHundred = picnicCostFirstHundred * 100;
        var restPeoples = peoples - 100;
        var budgetSecondHundred = picnicCostSecondHundred * restPeoples;
        var totalBudget = budgetFirstHundred + budgetSecondHundred;
        return totalBudget;
    }
    else {
        var budgetFirstHundred = picnicCostFirstHundred * 100;
        var budgetSecondHundred = picnicCostSecondHundred * 100;
        var restPeoples = peoples - 200;
        var budgetForRest = picnicCostForRest * restPeoples;
        var totalBudget = budgetFirstHundred + budgetSecondHundred + budgetForRest;
        return totalBudget;
    }
}
var picnicCost = picnicBudget(78);
console.log(picnicCost);

//problem 4

var myFriends = ["emon", "akib", "sazzad", "sunny", "sakib"];
function oddFriend(array) {
    //testing if all the array elements are string or not
    for (var n = 0; n < array.length; n++) {
        var type = typeof array[n];
        if (type != 'string') {
            return "please give correct input";
        }
    }
    //searching the odd friend
    for (var i = 0; i < array.length; i++) {
        var odd = array[i];
        if (odd.length % 2 == 1) {
            return odd;
        }
    }
}
var myOddFriend = oddFriend(myFriends);
console.log(myOddFriend);

