import TuneIn from './tune-in'

TuneIn.create({
  premiereDate: 'June 9',
  fallback: '.new-season-june'
})

TuneIn.after('June 24').show('.after-prem')
TuneIn.between('May 20', 'June 3').show('.new-season-june')
TuneIn.between('June 3', 'June 9').show('.new-season-sunday')
TuneIn.between('June 10', 'June 15').show('.all-new-sunday')
TuneIn.between('June 16', 'June 17').show('.all-new-tonight')
TuneIn.between('June 17', 'June 22').show('.all-new-sunday')
TuneIn.between('June 23', 'June 24').show('.all-new-tonight')
TuneIn.dayOfPremiere().show('.new-season-tonight')

TuneIn.updateToday('June 5')
console.log('June 5', TuneIn.getElSelector())

TuneIn.updateToday('June 9')
console.log('June 9', TuneIn.getElSelector())

TuneIn.updateToday('June 10')
console.log('June 10', TuneIn.getElSelector())

TuneIn.updateToday('June 18')
console.log('June 18', TuneIn.getElSelector())

TuneIn.updateToday('June 24')
console.log('June 24', TuneIn.getElSelector())
