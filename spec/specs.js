describe('pingPong', function() {
  it("outputs 'ping' for numbers divisible by 3", function () {
    expect(pingPong(6)).to.equal("ping")
  });
  it("outputs 'pong' for numbers divisible by 5", function () {
    expect(pingPong(10)).to.equal("pong")
  });
});
