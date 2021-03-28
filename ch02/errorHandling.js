const Rx = require("rxjs");

// simple function to take an array of JSON strings
// and returns an Observable that emits the objects
// parsed from those strings
function getJSON(arr) {
    return Rx.Observable.from(arr).map(JSON.parse);
}

// pass an array with three JSON strings to getJSON, with second
// string in array containing a syntax error, so it can't be parsed.
// subscribe to result, providing handlers for next and error
getJSON([
    '{"1": 1, "2": 2}',
    '{"success: true}', // invalid JSON string
    '{"enabled": true}'
]).subscribe(
    json => console.log("Parsed JSON: ", json),
    err => console.log(err.message)
);
