import TuneIn from './tune-in'

TuneIn.create({
  premiereDate: 'June 9',
  today: 'June 22',
  fallback: '.new-season-june'
})

TuneIn.between('May 20', 'June 3').show('.new-season-june')
TuneIn.between('June 3', 'June 9').show('.new-season-sunday')
TuneIn.between('June 10', 'June 15').show('.all-new-sunday')
TuneIn.between('June 16', 'June 17').show('.all-new-tonight')
TuneIn.between('June 17', 'June 22').show('.all-new-sunday')
TuneIn.between('June 23', 'June 24').show('.all-new-tonight')
TuneIn.dayOfPremiere().show('.new-season-tonight')
