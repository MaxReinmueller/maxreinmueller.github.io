// reverse a string
$("#formId").submit(function() {
  var initalInput = $("#theValue").val() 
  $("#theValue").val("");
  event.preventDefault();
  splitReverse(initalInput);
});

const splitReverse = (initalInput) => {
  var reverseInput = initalInput.split("").reverse().join("");
  display(reverseInput)
}

const display = (reverseInput) => {
  var newDiv = $("<h4 class='card-text'>")
  newDiv.text(reverseInput)
  $("#answer").append(newDiv);
}

// reverse an array
$("#reverseArray").submit(function() {
  var reverseVal = $("#arrayValues").val();
  $("#arrayValues").val("");
  reverseAr1(reverseVal);
  event.preventDefault();
  console.log('submit ' + reverseVal)
})

const reverseAr1 = (reverseVal) => {
  var newArr1 = reverseVal.split(" ").reverse();
  console.log('reverse ' + newArr1)
  dispArry(newArr1)
}

const dispArry = (newArr1) => {
  console.log('display ' + newArr1)
  arrDiv = $("<h4 class='card-text'>")
  arrDiv.text(newArr1)
  $("#arrayDisplay").append(arrDiv)
}