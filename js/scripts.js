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
