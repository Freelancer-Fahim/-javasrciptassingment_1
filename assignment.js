

function kilometerToMeter(kilo) {
    const miter = kilo *1000;
    
    return miter;
}
// console.log(kilometerToMeter(1))

function budgetCalculator (watch, mobile, laptop) {
    var watchPrise = watch * 50;
    var mobilePrise = mobile * 100;
    var laptopPrise = laptop * 500;

    var amount = watchPrise + mobilePrise + laptopPrise;

    return amount;
}

// console.log(budgetCalculator(20 , 20 , 50));


function hotelCost(night) {    
    let cost =0; 
    if (night<=10) {
        cost = night *100;
    }
    else if (night<=20) {
        firstPart = 10 * 100;
        remaining = night - 10;
        secondPart = night * 80;
        cost = firstPart + secondPart;
    }
    else{
        firstPart = 10 * 100 ;
        secondPart = night * 80 ;
        remaining = night - 20 ;
        thirdPart = night * 50;
        cost = firstPart + secondPart + thirdPart;

    }
    return cost;

}
// console.log(hotelCost(30));



let friends = [ 'Fahim Hasan', 'Kamal Uddin', 'Jhankar Mahabub Kaku', 'Moya Akter joya', 'toni', 'rasel' ];

function megaFriend(friendArray) {

    var maxLenth = friendArray[0];
    
    for (var i = 0; i < friendArray.length; i++) {
        let friends = friendArray[i];

        if (friends.length > maxLenth.length) {

            maxLenth = friends;
            
        }

    }

    return maxLenth;
    
}

    
// var count = megaFriend(friends);
// console.log(count);