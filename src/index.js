import TuneIn from './tune-in'

TuneIn.create({
  premiereDate: 'July 1',
  fallback: '.new-season-june'
})

// TuneIn.after('June 24').show('.after-prem')
TuneIn.between('June 10', 'June 21').show('.before')
// TuneIn.between('June 3', 'June 9').show('.new-season-sunday')
// TuneIn.between('June 10', 'June 15').show('.all-new-sunday')
// TuneIn.between('June 16', 'June 17').show('.all-new-tonight')
// TuneIn.between('June 17', 'June 22').show('.all-new-sunday')
// TuneIn.between('June 23', 'June 24').show('.all-new-tonight')
TuneIn.dayOfPremiere().show('.tonight')

TuneIn.updateToday('June 14')
console.log('June 14', TuneIn.getElSelector())

TuneIn.updateToday('July 1')
console.log('July 1', TuneIn.getElSelector())

TuneIn.updateToday('July 2')
console.log('June 2', TuneIn.getElSelector())
