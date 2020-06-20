const deepCopy = require('./deep-copy');

describe('object/deepCopy', () => {
  test('deepCopy: normal structure', () => {
    const original = {
      a: 1,
      b: 'string',
      c: true,
      d: null,
      e: undefined,
    };
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });

  test('deepCopy: nested structure', () => {
    const original = {
      a: {
        b: 1,
        c: [
          2,
          3,
          {
            d: 4,
          },
        ],
      },
    };
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });

  test('deepCopy: circular structure', () => {
    const original = {
      a: 1,
    };
    original.circular = original;

    const copy = deepCopy(original);

    expect(copy).toEqual(original);
  });
});
