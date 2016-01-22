$(document).ready(function() {
  $("button#submit").click(function(event) {

    //Reset List Output
    $("ul#pingPongList").text("");

    //New List Output
    var totalInputNumber =  parseInt($("input#totalInputNumber").val());
    pingPongOutput(totalInputNumber);
    event.preventDefault();
  });
});

var pingPong = function(currentInputNumber) {
  if (currentInputNumber % 3 === 0 && currentInputNumber % 5 === 0) {
    return 'pingpong';
  } else if (currentInputNumber % 3 === 0) {
    return 'ping';
  } else if (currentInputNumber % 5 === 0) {
    return 'pong';
  } else {
    return currentInputNumber;
  }
}

var pingPongOutput = function(totalInputNumber) {
  if (invalidInputCheck(totalInputNumber) === "negative") {
    alert("Please input a positive number!");
  } else if (invalidInputCheck(totalInputNumber) === "overload") {
    alert("Values 100,000 and above will result in increasingly long load times, as well as potential crashes.");
  } else {
    for (var i = 1; i <= totalInputNumber; i++) {
      $("ul#pingPongList").append("<li>" + pingPong(i) + "</li>");
    }
  }
}

var invalidInputCheck = function(totalInputNumber) {
  if (totalInputNumber < 1) {
    return "negative";
  } else if (totalInputNumber >= 100000) {
    return "overload";
  }
}
