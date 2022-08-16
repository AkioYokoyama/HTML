import { fetchData } from '../../4/async'

test('the data id is one', async () => {
  return await fetchData(1).then(response => {
    expect(response.data.id).toBe(1);
  });
});
