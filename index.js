function receivesAFunction(callback) {
    callback();
}



function returnsAnAnonymousFunction (cb) {
    return cb;
}
returnsAnAnonymousFunction(function () { return 4 + 5; });