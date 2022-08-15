// 配列のテスト
const shoppingList = [
  'milk',
  'juice',
  'sugar',
  'solt',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
});
