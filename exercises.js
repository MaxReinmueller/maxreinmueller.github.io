// // splitting letters
// var splitReverse = (data) => {
//     var data = $("#reverseInput").val();
//     var newNumber = data.toString().split("").reverse();
//     $("#reverseOutput").append(newNumber);
//     // countZeros(newNumber);
// }


var countZeros = (newNumber) => {
    var count = 0;
    for (var i = 0 ; i < newNumber.length ; i++) {

        if (newNumber[i] == '0') {
            count++
        } else {
            break;
        }
    }
    console.log('count ' + count)
}


