describe("PrimeFactors", function() {
  var player;
  var song;
  it("should be able to find the largest prime factor of 2", function() {
    expect(projectEulerThree(2)).toEqual([2]);
  });

  it("should be able to find the largest prime factor of 10", function() {
    expect(projectEulerThree(10)).toEqual([2, 5]);
  });

  it("should be able to find the largest prime factor of 239", function() {
    expect(projectEulerThree(239)).toEqual([239]);
  });
});
