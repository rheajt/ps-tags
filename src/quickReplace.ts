const replaces = [
    ["&#126;", "~"],
    ["&#47;", "/"],
];

export default function quickReplace(str: string) {
    let newStr = str;
    replaces.forEach((replace) => {
        newStr = newStr.replace(replace[0], replace[1]);
    });
    return newStr;
}
