const Rx = require("rxjs");

// catch takes either an Observable or a function
// that receives the error as a parameter and
// returns another Observable
function getJSON(arr) {
    return Rx.Observable.from(arr).map(JSON.parse);
}

const caught$ = getJSON(['{"1": 1, "2": 2}', '{"1: 1}', '{"3": 3}']).catch(err =>
    Rx.Observable.of({
        error: `There was an error parsing JSON - ${err.message}`
    })
);

caught$.subscribe(
    json => console.log("Parsed JSON: ", json),
    err => console.log(err.message)
);
