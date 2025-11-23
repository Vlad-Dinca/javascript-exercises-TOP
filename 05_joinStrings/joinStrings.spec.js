const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Vlad', () => {
    expect(values.firstName).toEqual('Vlad');
  });
  test('lastName is Dinca', () => {
    expect(values.lastName).toEqual('Dinca');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 2001', () => {
    expect(values.birthYear).toEqual(2001);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Vlad Dinca and I am 24 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Vlad Dinca', () => {
    expect(values.fullName).toEqual('Vlad Dinca');
  });
  test('age is 24', () => {
    expect(values.age).toEqual(24);
  });
});
