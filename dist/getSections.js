"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function getSections() {
    const dir = (0, path_1.join)("/home/jordanrhea/projects/powerschool/PowerSchool-DAT-Reference/plugin/web_root/admin/META/dat_reference/tags");
    const files = (0, fs_1.readdirSync)(dir, "utf-8");
    let sections = [];
    for (let i = 0; i < files.length; i++) {
        if (files[i].includes("json")) {
            const fileContents = (0, fs_1.readFileSync)((0, path_1.join)(dir, files[i]), "utf-8");
            try {
                const json = JSON.parse(fileContents);
                sections = [...sections, ...json];
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    return sections;
}
exports.default = getSections;
