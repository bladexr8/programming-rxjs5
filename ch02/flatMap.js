const Rx = require("rxjs");

// flatMap flattens Observables
// It takes a source Observable and a
// function that returns a new Observable
// and applies a function to each element
// in the source Observable like map does.
// But flatMap emits to the main sequence
// the values emitted by each new
// Observable, "flattening" all
// Observables into one, resulting
// in a single Observable

const values$ = Rx.Observable.from([
    Rx.Observable.of(1, 2, 3),
    Rx.Observable.of(4, 5, 6),
    Rx.Observable.of(7, 8, 9)
]);

// value$ is an Observable that emits 3 Observables
values$.flatMap(v => v).subscribe(v => console.log(v));