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
