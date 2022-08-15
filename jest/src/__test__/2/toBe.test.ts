// 値の一致確認
test('two plus two is four', () => expect(2 + 2).toBe(4));

// Null確認
test('Null check', () => expect(null).toBeNull());
test('Not Null check', () => expect('null').not.toBeNull());

// Undifined確認
test('undefined check', () => expect(undefined).toBeUndefined());
test('Not undefined check', () => expect('undefined').not.toBeUndefined());
test('Defined check', () => expect(1).toBeDefined());

// Boolean確認
test('true check', () => expect(true).toBeTruthy());
test('not true check', () => expect('').not.toBeTruthy());
test('false check', () => expect(false).toBeFalsy());

// 複数チェック(null)
test('null pattern check', () => {
  const nil = null;
  expect(nil).toBe(null);
  expect(nil).toBeNull();
  expect(nil).toBeFalsy();
});

