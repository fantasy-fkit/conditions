/**
 * Created by KlimMalgin on 04.03.2015.
 */

/**
 * Здесь будет описание условных функторов типа
 * gt(greater than),
 * gte(greater than or equal),
 * lt(less than),
 * lte,
 * equal,
 * notEqual
 * и т.д.
 **/

var curry = require('core.lambda').curry,
    // --
    fcommon = require('./fcommon'),
    operationWrap = fcommon.operationWrap,
    conditionResult = fcommon.conditionResult;

var gtOp =  curry(2, function (meV, valueV) { return conditionResult(meV > valueV, meV); });
var gteOp = curry(2, function (meV, valueV) { return conditionResult(meV >= valueV, meV); });

var ltOp =  curry(2, function (meV, valueV) { return conditionResult(meV < valueV, meV); });
var lteOp = curry(2, function (meV, valueV) { return conditionResult(meV <= valueV, meV); });

var equalOp =    curry(2, function (meV, valueV) { return conditionResult(meV == valueV, meV); });
var notEqualOp = curry(2, function (meV, valueV) { return conditionResult(meV != valueV, meV); });

module.exports = {

    gt: operationWrap(gtOp),
    gte: operationWrap(gteOp),
    lt: operationWrap(ltOp),
    lte: operationWrap(lteOp),

    equal: operationWrap(equalOp),
    notEqual: operationWrap(notEqualOp)


};
