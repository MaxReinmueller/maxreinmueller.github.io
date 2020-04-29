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
  console.log(newDiv);
  $("#answer").append(newDiv);
}

// reverse an array
$("#reverseArray").submit(function() {
  var initalArray = $("#arrayValues").val();
  $("#arrayValues").val("");
  event.preventDefault();
  reverseAr(initalArray);
})

const reverseAr = (initalArray) => {
  var newArr = initalArray.split(" ").reverse();
  dispArry(newArr);
}

const dispArry = (newArr) => {
  arrDiv = $("<h4 class='card-text'>")
  arrDiv.text(newArr)
  $("#arrayDisplay").append(arrDiv)
}