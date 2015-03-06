/**
 * Created by KlimMalgin on 04.03.2015.
 */

var curry = require('core.lambda').curry,
    // --
    fcommon = require('common'),
    operationWrap = fcommon.operationWrap,
    conditionResult = fcommon.conditionResult;

var gtOp =  curry(2, function (meV, valueV) { return conditionResult(meV > valueV, meV); });
var gteOp = curry(2, function (meV, valueV) { return conditionResult(meV >= valueV, meV); });

var ltOp =  curry(2, function (meV, valueV) { return conditionResult(meV < valueV, meV); });
var lteOp = curry(2, function (meV, valueV) { return conditionResult(meV <= valueV, meV); });

var equalOp =    curry(2, function (meV, valueV) { return conditionResult(meV == valueV, meV); });
var notEqualOp = curry(2, function (meV, valueV) { return conditionResult(meV != valueV, meV); });

module.exports = {

    gt: function (valueO) {
        return operationWrap(this, gtOp, valueO);
    },
    gte: function (valueO) {
        return operationWrap(this, gteOp, valueO);
    },
    lt: function (valueO) {
        return operationWrap(this, ltOp, valueO);
    },
    lte: function (valueO) {
        return operationWrap(this, lteOp, valueO);
    },

    equal: function (valueO) {
        return operationWrap(this, equalOp, valueO)
    },
    notEqual: function (valueO) {
        return operationWrap(this, notEqualOp, valueO)
    }
    
};
