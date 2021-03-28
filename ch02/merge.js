const Rx = require("rxjs");

const a$ = Rx.Observable.interval(200).map(i => `A${i}`);
const b$ = Rx.Observable.interval(100).map(i => `B${i}`);

Rx.Observable.merge(a$, b$).subscribe(x => {
    console.log(x);
});