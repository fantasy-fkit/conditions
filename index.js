/**
 * Created by KlimMalgin on 04.03.2015.
 */

var curry = require('core.lambda').curry;

var gtOp =  curry(2, function (meV, valueV) { return meV > valueV ? meV : null; });
var gteOp = curry(2, function (meV, valueV) { return meV >= valueV ? meV : null; });

var ltOp =  curry(2, function (meV, valueV) { return meV < valueV ? meV : null; });
var lteOp = curry(2, function (meV, valueV) { return meV <= valueV ? meV : null; });

var equalOp =    curry(2, function (meV, valueV) { return meV == valueV ? meV : null; });
var notEqualOp = curry(2, function (meV, valueV) { return meV != valueV ? meV : null; });

module.exports = {

    gt: function (valueO) {
        return this.operation(gtOp)(valueO);
    },
    gte: function (valueO) {
        return this.operation(gteOp)(valueO);
    },
    lt: function (valueO) {
        return this.operation(ltOp)(valueO);
    },
    lte: function (valueO) {
        return this.operation(lteOp)(valueO);
    },

    equal: function (valueO) {
        return this.operation(equalOp)(valueO);
    },
    notEqual: function (valueO) {
        return this.operation(notEqualOp)(valueO);
    }
    
};
