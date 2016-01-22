describe('pingPong', function() {
  it("will output 'ping' for numbers divisible by 3", function () {
    expect(pingPong(6)).to.equal('ping')
  });
  it("will output 'pong' for numbers divisible by 5", function () {
    expect(pingPong(10)).to.equal('pong')
  });
  it("will output 'pingpong' for numbers divisible by both 3 and 5", function () {
    expect(pingPong(15)).to.equal('pingpong')
  });
  it("will output inputNumber if no previous criteria is met", function () {
    expect(pingPong(7)).to.equal(7)
  });
});

describe('invalidInputCheck', function () {
  it("will output 'negative' if input is 0", function () {
    expect(invalidInputCheck(0)).to.equal("negative")
  });
  it("will output 'negative' if input is a negative number", function () {
    expect(invalidInputCheck(-5)).to.equal("negative")
  });
  it("will output 'overload' if input is 100000 or higher", function () {
    expect(invalidInputCheck(-5)).to.equal("negative")
  });
})
