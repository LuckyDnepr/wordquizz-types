"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterRules = void 0;
var FilterRules;
(function (FilterRules) {
    FilterRules["EQUALS"] = "EQUALS";
    FilterRules["NOT_EQUALS"] = "NOT_EQUALS";
    FilterRules["GREATER_THAN"] = "GREATER_THAN";
    FilterRules["GREATER_THAN_OR_EQUALS"] = "GREATER_THAN_OR_EQUALS";
    FilterRules["LESS_THAN"] = "LESS_THAN";
    FilterRules["LESS_THAN_OR_EQUALS"] = "LESS_THAN_OR_EQUALS";
    FilterRules["LIKE"] = "LIKE";
    FilterRules["NOT_LIKE"] = "NOT_LIKE";
    FilterRules["IN"] = "IN";
    FilterRules["NOT_IN"] = "NOT_IN";
    FilterRules["IS_NULL"] = "IS_NULL";
    FilterRules["IS_NOT_NULL"] = "IS_NOT_NULL";
})(FilterRules || (exports.FilterRules = FilterRules = {}));
