$(document).ready(function() {
  $("form#pingPong").submit(function(event) {
    var totalInputNumber = parseInt($("input#totalInputNumber").val());
    for (var i = 1; i <= totalInputNumber; i++) {
      $("ul#pingPongList").append(pingPong(totalInputNumber));
    }
  });
});

var pingPong = function(currentInputNumber) {
  if (currentInputNumber % 3 === 0 && currentInputNumber % 5 === 0) {
    return "<li>'pingpong'</li>"
  } else if (currentInputNumber % 3 === 0) {
    return "<li>'ping'</li>";
  } else if (currentInputNumber % 5 === 0) {
    return "<li>'pong'</li>";
  } else {
    return "<li>" + currentInputNumber + "</li>";
  }
}
