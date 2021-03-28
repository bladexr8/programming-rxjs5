const Rx = require("rxjs");

// concatAll is a function that takes an array of arrays
// and returns a "flattened" single array containing the
// values of all the sub-arrays, instead of the sub-arrays
// themselves

const values$ = Rx.Observable.from([
    Rx.Observable.of(1, 2, 3),
    Rx.Observable.of(4, 5, 6),
    Rx.Observable.of(7, 8, 9)
]);

values$.concatAll().subscribe(v => console.log(v));