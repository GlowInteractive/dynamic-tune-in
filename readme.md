# Dynamic Tune In

A package that compares today's date, to a premiere date, and returns a given string for that day.

## Usage

---

Initialize your tune-in by passing it an options object with a premiereDate and a fallback which will be returned if no date is matched. When providing a date it must be in the following format: `Month Day`.

While testing, you can supply the `today` property which will run the TuneIn as if today is whatever day you set it to.

| Property     |  Type  |                 Example |             Required              |
| ------------ | :----: | ----------------------: | :-------------------------------: |
| premiereDate | String | 'June 9' or 'August 15' |               true                |
| today        | String |    'June 10' or 'May 5' | false - defaults to today's date. |
| fallback     | String |     '.fallback-tune-in' |               true                |

```javascript
// create your tune-in instance
TuneIn.create({
  premiereDate: 'June 9',
  today: 'June 3', // Only supply this during testing.
  fallback: '.new-season-june'
})
```

The goal here is to make it easier to show a specific element on the page, given a date or date range. Below we supply a className to each TuneIn date, which will be returned when today falls within that range. See below.

```javascript
// Add your tune-in dates

// Anytime before May 20 - return '.tune-in-0'
TuneIn.before('May 20').show('.tune-in-0')

// From May 20th - 12AM on June 3rd - return .tune-in-1
TuneIn.between('May 20', 'June 3').show('.tune-in-1')

// From June 3 - 12AM on June 9 - return .tune-in-2
TuneIn.between('June 3', 'June 9').show('.tune-in-2')

// From June 10 - 12AM on June 15 - return .tune-in-3
TuneIn.between('June 10', 'June 15').show('.tune-in-3')

// From June 15 - on - return .tune-in-4
TuneIn.after('June 15').show('.tune-in-4')

// Return .premiere-tune-in on day of premier
TuneIn.dayOfPremiere().show('.premiere-tune-in')
```

_NOTE: if multiple cases are true - the last case satisfying the condition will win._

Now that we've added tune in dates, all we need to do is call `TuneIn.getElSelector()` to get our current tune-in className.

```javascript
var tuneInClassName = TuneIn.getElSelector()

// get the element
var tuneInEl = document.querySelector(tuneInEl)

// now do something with element. show, hide, animate, etc...
```
