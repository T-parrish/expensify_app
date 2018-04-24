const add = (a,b) => a + b;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

const generateGreeting = (name = 'Anonymous') => `hello ${name}`

test('should return a name', () => {
    const result = generateGreeting('Taylor');
    expect(result).toBe('hello Taylor');
});

test('should generate greeting for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('hello Anonymous');
});