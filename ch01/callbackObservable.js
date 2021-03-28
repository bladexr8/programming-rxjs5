const Rx = require("rxjs");
const fs = require("fs");

const Observable = Rx.Observable;
// create an Observable from the readdir method
const readdir$ = Rx.bindNodeCallback(fs.readdir);

const source$ = readdir$("/mnt/c/Users/User"); // send a delayed message

// subscribe and kick it off
const subscription = source$.subscribe(
    res => console.log(`List of directories: ${res}`),
    error => console.log(`Error: ${error}`),
    () => console.log("Done!")
);

