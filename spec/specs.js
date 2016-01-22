describe('pingPong', function() {
  it("outputs 'ping' for numbers divisible by 3", function () {
    expect(pingPong(6)).to.equal("ping")
  });
  it("outputs 'pong' for numbers divisible by 5", function () {
    expect(pingPong(10)).to.equal("pong")
  });
  it("outputs 'pingpong' for numbers divisible by both 3 and 5", function () {
    expect(pingPong(15)).to.equal("pingpong")
  });
});
