var pingPong = function(inputNumber) {
  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    return "pingpong"
  } else if (inputNumber % 3 === 0) {
    return "ping";
  } else if (inputNumber % 5 === 0) {
    return "pong";
  }
}
