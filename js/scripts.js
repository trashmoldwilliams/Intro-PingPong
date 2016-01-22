$(document).ready(function() {
  $("button#submit").click(function(event) {
    $("ul#pingPongList").text("");
    var totalInputNumber =  parseInt($("input#totalInputNumber").val());
    if (invalidInputCheck(totalInputNumber) === "negative") {
      alert("Please input a positive number!");
    } else {
      for (var i = 1; i <= totalInputNumber; i++) {
        $("ul#pingPongList").append("<li>" + pingPong(i) + "</li>");
      }
    }
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

var invalidInputCheck = function(totalInputNumber) {
  if (totalInputNumber < 1) {
    return "negative";
  }
}
