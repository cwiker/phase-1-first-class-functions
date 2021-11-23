function receivesAFunction(callback) {
    return callback();
}

receivesAFunction(function () {
    2 + 2;
});


const returnsANamedFunction = function() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return function() {returnsANamedFunction}
}
    