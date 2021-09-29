var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var cartaPostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " y tiene " + frutas);
};
var test = ['x', 'c', 'a'];
var test2 = test.slice(0, test.length - 1);
var test3 = __spreadArray(__spreadArray([], test2), ['y', test[test.length - 1]]);
var test4 = test3.join(', ');
cartaPostres('Ponqué', test4);
