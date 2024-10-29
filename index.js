function receivesAFunction(cb) {
    cb()
}

function returnsANamedFunction() {
    const returnFunction = () => "this is a function" 
    return returnFunction
}

function returnsAnAnonymousFunction() {
    return function() {"this is a function"}
}