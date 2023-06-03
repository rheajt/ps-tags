"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaces = [
    ["&#126;", "~"],
    ["&#47;", "/"],
];
function quickReplace(str) {
    let newStr = str;
    replaces.forEach((replace) => {
        newStr = newStr.replace(replace[0], replace[1]);
    });
    return newStr;
}
exports.default = quickReplace;
