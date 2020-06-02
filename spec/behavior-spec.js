// Behavioral specs.
describe('Tests', () => {
  let partsArr;
  beforeEach(() => {
    partsArr = [2, 7, 2.2, 3.8, 4];
  });

  it('Parts sum is integer', () => {
    const sum = partsArr.reduce((acc, val) => acc + val, 0);
    expect(Number.isInteger(sum)).toBe(true);
  });
  
  it('Parts percentage sum is equal to 100', () => {
    const result = parts(partsArr);
    const resultSum = result.reduce((acc, val) => acc + parseFloat(val), 0);
    expect(resultSum).toEqual(100);
  });
  
  it('Function returns an array', () => {
    const result = parts(partsArr);
    expect(result).toEqual(jasmine.any(Array));
  });
  
  it('Final output', () => {
    const result = parts(partsArr);
    expect(result).toEqual([ '10.526', '36.842', '11.579', '20.000', '21.053' ]);
  });

  it('There`s no negative parts in an array', () => {
    let arr = [2, 7, 2.2, 3.8, -4];
    expect(() => parts(arr)).toThrow(new Error ('Part cannot be negative!'));
  });
});

