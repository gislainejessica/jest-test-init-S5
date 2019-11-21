function soma(a, b) {
  return a + b;
}

test('Se eu somo 2 e 2 resultado é 4', () => {
  const resultado = soma(2, 2);
  expect(resultado).toBe(4);
});
