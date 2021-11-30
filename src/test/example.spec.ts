const addNumbers = (num1, num2) => {
  return num1 + num2;
};

describe('Example test', () => {
  it('Equals true', () => {
    expect(true).toBe(true);
  });

  it('Should add two numbers', () => {
    expect(addNumbers(4, 4)).toEqual(8);
  });
});
