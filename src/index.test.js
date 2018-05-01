import shuffle from './';

describe('Shuffle', () => {
  test('throws TypeError if arg is not an array', () => {
    expect(() => shuffle({ object: true })).toThrowError(TypeError);
    expect(() => shuffle('string')).toThrowError(TypeError);
    expect(() => shuffle(0)).toThrowError(TypeError);
    expect(() => shuffle(null)).toThrowError(TypeError);
    expect(() => shuffle(undefined)).toThrowError(TypeError);
  });

  test('return a new array', () => {
    const original = [1, 2, 3];
    const shuffled = shuffle(original);

    original.push(4);

    expect(shuffled.length).not.toBe(original.length);
  });

  test('return a shuffled array', () => {
    const original = [1, 'z', 2, 2, 5, 7, 9, 0, 'a'];

    expect(shuffle(original)).not.toEqual(original);
  });

  test('contain the same elements after shuffle', () => {
    const original = [1, 'z', 2, 2, 5, 7, 9, 0, 'a'];
    const originalSorted = original.sort();

    const actual = shuffle(original);
    const actualSorted = actual.sort();

    expect(actualSorted).toEqual(originalSorted);
  });
});
