let mock;

beforeAll(() => {
  mock = {id: 13};
});
afterAll(() => {
  mock = {};
});


test('first: before / after', () => {
  expect(mock.id).toBe(13);
  mock = {id: 13, age: 20}
})

test('second: before / after', () => {
  expect(mock.id).toBe(13);
  // beforeAll/afterAllは全体を通して1だけ呼ばれるので
  // first終了後、mockは {id: 13, age: 20}になり、
  // age: 20になる
  expect(mock.age).toBe(20);
})

