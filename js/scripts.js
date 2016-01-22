$(document).ready(function() {
  $("button#submit").click(function(event) {
    var totalInputNumber =  parseInt($("input#totalInputNumber").val());
    for (var i = 1; i <= totalInputNumber; i++) {
      $("ul#pingPongList").append("<li>" + pingPong(totalInputNumber + "</li>"));
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
