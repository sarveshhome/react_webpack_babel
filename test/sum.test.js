const sum = require('../src/sum');

describe('Sum Function', () => {
  test('adds two positive numbers correctly', () => {
    expect(sum.methodSum(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number correctly', () => {
    expect(sum.methodSum(5, -3)).toBe(2);
    expect(sum.methodSum(-3, 5)).toBe(2);
  });

  test('adds two negative numbers correctly', () => {
    expect(sum.methodSum(-2, -3)).toBe(-5);
  });

  test('adds zero correctly', () => {
    expect(sum.methodSum(0, 5)).toBe(5);
    expect(sum.methodSum(5, 0)).toBe(5);
    expect(sum.methodSum(0, 0)).toBe(0);
  });

  test('adds decimal numbers correctly', () => {
    expect(sum.methodSum(0.1, 0.2)).toBeCloseTo(0.3);
    expect(sum.methodSum(1.5, 2.7)).toBeCloseTo(4.2);
  });

  test('handles string numbers by converting them', () => {
    expect(sum.methodSum('2', '3')).toBe(5);
    expect(sum.methodSum('2', 3)).toBe(5);
  });

  test('returns NaN for invalid inputs', () => {
    expect(sum.methodSum('abc', 3)).toBe(NaN);
    expect(sum.methodSum(2, 'xyz')).toBe(NaN);
  });

  test('handles undefined parameters', () => {
    expect(sum.methodSum(undefined, 5)).toBe(NaN);
    expect(sum.methodSum(5, undefined)).toBe(NaN);
    expect(sum.methodSum(undefined, undefined)).toBe(NaN);
  });

  test('handles null parameters', () => {
    expect(sum.methodSum(null, 5)).toBe(5);
    expect(sum.methodSum(5, null)).toBe(5);
    expect(sum.methodSum(null, null)).toBe(0);
  });
});
