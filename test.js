$("#formId").submit(function() {
    var formValue = $("#theValue").val() 
    display(formValue);
    $("#theValue").val("")
    // alert(formValue);
    // splitReverse(formValue);
});

const splitReverse = (formValue) => {
    var stuff = formValue.split("").reverse().join("");
    
    // alert(stuff);
    event.preventDefault();
}

const display = (formValue) => {
    var newDiv = $("<div>")
    newDiv.text(formValue)
    $("#answer").append(newDiv);
    event.preventDefault();
}