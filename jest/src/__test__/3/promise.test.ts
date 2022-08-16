import { fetchData } from '../../3/promise'

test('the data id is one', () => {
  return fetchData(1).then(response => {
    expect(response.data.id).toBe(1);
  });
});
