let mock;

beforeEach(() => {
  mock = {id: 13};
});
afterEach(() => {
  mock = {};
});


test('before / after', () => {
  expect(mock.id).toBe(13);
})

