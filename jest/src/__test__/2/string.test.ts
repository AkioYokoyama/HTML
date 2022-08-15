// 文字列のテスト
test('There is no I in team', () => expect('team').not.toMatch(/I/));
test('There is I in Item', () => expect('Item').toMatch(/I/));
