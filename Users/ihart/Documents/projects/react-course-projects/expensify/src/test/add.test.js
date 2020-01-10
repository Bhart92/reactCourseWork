const add = (a, b) => a + b

test('should add two numbers',() => {
  const result = add(4, 4);
  expect(result).toBe(8);

});

const generateGreeting = (name = "Anon") => `Hello ${name}!`;

test('should generate a greeting using the name variable', () => {
	const result = generateGreeting('Mike');
	expect(result).toBe('Hello Mike!');
});

test('Should generate greeting for no name variable', () => {
	const result = generateGreeting();
	expect(result).toBe('Hello Anon!');
});
