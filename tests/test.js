/* eslint-env jest */ // this is for eslint to recognize the jest keywords
const { formatPhone } = require('../index');

test('test formatPhone function', () => {
  expect(formatPhone('1234567890')).toBe('(123) 456-7890');
  expect(formatPhone('12345')).toBe('Please enter a 10-digit phone number in the format XXXXXXXXXX');
  expect(formatPhone('123$56&890')).toBe('Please enter a 10-digit phone number in the format XXXXXXXXXX');
  expect(formatPhone('@@@@@%%%%%')).toBe('Please enter a 10-digit phone number in the format XXXXXXXXXX');
  expect(formatPhone('123 456 7890')).toBe('Please enter a 10-digit phone number in the format XXXXXXXXXX');
});
