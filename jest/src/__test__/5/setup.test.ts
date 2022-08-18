let mock;

beforeEach(() => {
  mock = {id: 13};
});
afterEach(() => {
  mock = {};
});


test('first: before / after', () => {
  expect(mock.id).toBe(13);
  mock = {id: 13, age: 20}
})

test('second: before / after', () => {
  expect(mock.id).toBe(13);
  // beforeEach/afterEachはtestごとに呼ばれるため、
  // first終了後、mockは {}になり、
  // 再度、テスト実行時に {id: 13}となるので
  // firstで設定した age: 20はなく、undefinedになる
  expect(mock.name).toBeUndefined();
})

