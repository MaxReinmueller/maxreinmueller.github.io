// reverse a string
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

// reverse an array
$("#reverseArray").submit(function() {
    var initalArray = $("#arrayValues");
    $("#arrayValues").val("");
    reversAr(initalArray);
    event.preventDefault();
})

const reverseAr = (initalArray) => {
    var reversArr = initalArray;
    reversArr.reverse();
    event.preventDefault();
}

const dispArry = (reversArr) => {
    arrDiv = $("<h4 class='card-text'>")
    arrDiv.text(reversArr)
    $("#arrayDisplay").append(arrDiv)
    event.preventDefault();

}