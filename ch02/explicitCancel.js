const Rx = require("rxjs");

// subscribe two Observers to the "counter" Observable
// after 2 seconds cancel second subscription and see
// its output stop but 1st subscriber's output keeps going

const counter$ = Rx.Observable.interval(1000);

// Two subscribers
const subscription1 = counter$.subscribe(i => {
    console.log(`Subscription 1: ${i}`);
});

const subscription2 = counter$.subscribe(i => {
    console.log(`Subscription 2: ${i}`);
});

// Cancel second subscriber
setTimeout(() => {
    console.log('Cancelling subscription 2...');
    subscription2.unsubscribe();
}, 2000);
