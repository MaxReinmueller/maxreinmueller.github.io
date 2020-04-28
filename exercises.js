// splitting letters
var splitReverse = (data) => {
    var data = $("#reverseInput").val();
    var newNumber = data.toString().split("").reverse();
    $("#reverseOutput").append(newNumber);
    // countZeros(newNumber);
}


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

$("#formId").submit(function() {
    var initalInput = $("#theValue").val() 
    $("#theValue").val("")
    event.preventDefault();
    splitReverse(initalInput);
});

const splitReverse = (initalInput) => {
    var reverseInput = initalInput.split("").reverse().join("");
    display(reverseInput)
    event.preventDefault();
}

const display = (reverseInput) => {
    var newDiv = $("<h4 class='card-text'>")
    newDiv.text(reverseInput)
    $("#answer").append(newDiv);
}