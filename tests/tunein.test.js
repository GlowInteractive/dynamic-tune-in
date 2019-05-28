import TuneIn from '../src/tune-in'
TuneIn.create({
  premiereDate: 'June 9',
  fallback: '.fallback'
})

test('TuneIn returns fall back when no date matches', () => {
  expect(TuneIn.getElSelector()).toEqual('.fallback')
})

test('TuneIn returns correct string for date ranges.', () => {
  TuneIn.between('June 1', 'June 6').show('.range-1')
  TuneIn.updateToday('June 3')

  expect(TuneIn.getElSelector()).toEqual('.range-1')
  TuneIn.updateToday('June 5')

  expect(TuneIn.getElSelector()).toEqual('.range-1')

  TuneIn.updateToday('June 20')

  expect(TuneIn.getElSelector()).not.toEqual('.range-1')
  expect(TuneIn.getElSelector()).toEqual('.fallback')
})

test('TuneIn returns proper string on day of premiere', () => {
  TuneIn.updateToday('June 9')
  TuneIn.dayOfPremiere().show('.premiere')
  expect(TuneIn.getElSelector()).toEqual('.premiere')
})
