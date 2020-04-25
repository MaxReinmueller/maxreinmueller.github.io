$("#formId").submit(function() {
    var initalInput = $("#theValue").val() 
    $("#theValue").val("")
    splitReverse(initalInput);
});

const splitReverse = (initalInput) => {
    var reverseInput = initalInput.split("").reverse().join("");
    display(reverseInput)
    event.preventDefault();
}

const display = (reverseInput) => {
    var newDiv = $("<h3>")
    newDiv.text(reverseInput)
    $("#answer").append(newDiv);
    event.preventDefault();
}