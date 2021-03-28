const Rx = require("rxjs");

// 1. define Obervable with a range of 0 to 5
// 2. use reduce to add each new value to the previous one
// 3. note initial value of zero for both properties
// 4. need to count number of elements in the sequence
//    as reduce doesn't provide total # elements in sequence.
// 5. every new element will return same object with
//    updated values
// 6. when sequence ends, reduce will call next with the
//    object containing final sum and final count.
// 7. Then use map to return result of dividing the sum
//    by the count
const average$ = Rx.Observable
    .range(0, 5)
    .reduce((previous, current) => {
        return {
            sum: previous.sum + current,
            count: previous.count + 1
        };
    },
    { sum: 0, count: 0 }
    )
    .map(result => result.sum / result.count);

average$.subscribe(x => console.log(`Average is ${x}`));