import dti from '../src/date-helper'

dti.create({
  premiereDate: 'June 9',
  today: 'June 9'
})

test("Today is the premiere, if today's date is the premiere date.", () => {
  expect(dti.isPremiere).toBeTruthy()
})

test('Today is not the premiere, if it is before or after premiere', () => {
  dti.setToday('June 2')
  expect(dti.isPremiere).toBeFalsy()

  dti.setToday('June 10')
  expect(dti.isPremiere).toBeFalsy()
})

test('Today is after premiere if the premiere date has passed', () => {
  dti.setToday('June 10')
  expect(dti.isAfterPremiere).toBeTruthy()
})

test("Today isn't before premiere, if the premiere date has passed", () => {
  dti.setToday('June 10')
  expect(dti.isBeforePremiere).toBeFalsy()
})

test('June 3 is between June 1 and June 5', () => {
  dti.setToday('June 3')
  expect(dti.isBetween('June 1', 'June 3')).toBeTruthy()
})

test("June 6 isn't between June 1 and June 5", () => {
  dti.setToday('June 6')
  expect(dti.isBetween('June 1', 'June 3')).toBeFalsy()
})

test('June 5 is before June 6', () => {
  dti.setToday('June 5')
  expect(dti.isBefore('June 6')).toBeTruthy()
})

test('June 6 is after June 5', () => {
  dti.setToday('June 6')
  expect(dti.isAfter('June 5')).toBeTruthy()
})
