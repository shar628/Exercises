const sum = require('./sum');

test('properly adds rwo numbers', () => {
    expect(sum(4, 5)).toBe(10);
});

