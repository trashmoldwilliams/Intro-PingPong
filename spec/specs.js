describe('pingPong', function() {
  it("will output 'ping' for numbers divisible by 3", function () {
    expect(pingPong(6)).to.equal("<li>'ping'</li>")
  });
  it("will output 'pong' for numbers divisible by 5", function () {
    expect(pingPong(10)).to.equal("<li>'pong'</li>")
  });
  it("will output 'pingpong' for numbers divisible by both 3 and 5", function () {
    expect(pingPong(15)).to.equal("<li>'pingpong'</li>")
  });
  it("will output inputNumber if no previous criteria is met", function () {
    expect(pingPong(7)).to.equal("<li>7</li>")
  });
});
