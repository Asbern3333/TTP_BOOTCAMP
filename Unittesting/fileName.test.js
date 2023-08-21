const sum = require('./fileName')

test('sum(1, 2) adds 1 + 2 to equal 3',() =>{
    expect(sum(1,2)).toBe(3)
})

const mockFn = jest.fn();
mockFn.mockImplementation((a,b) => a+b);
test('mock function returns 42', () => {
    expect(mockFn(4,5)).toBe(9);
  });