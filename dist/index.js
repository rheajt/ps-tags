"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getSections_1 = __importDefault(require("./getSections"));
const enquirer_1 = require("enquirer");
const quickReplace_1 = __importDefault(require("./quickReplace"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const sections = (0, getSections_1.default)();
        const { section } = yield (0, enquirer_1.prompt)({
            type: "autocomplete",
            name: "section",
            message: "What section would you like to view?",
            choices: sections.map((section) => section.section),
        });
        const choices = sections
            .filter((s) => s.section === section)[0]
            .tags.map((t) => ({
            name: t.name,
            message: `${(0, quickReplace_1.default)(t.name)} - ${t.desc} \n ex: ${(0, quickReplace_1.default)(t.ex)}`,
            value: (0, quickReplace_1.default)(t.disp),
        }));
        const resp = yield (0, enquirer_1.prompt)({
            type: "autocomplete",
            name: "tag",
            message: "What tags would you like to view?",
            choices,
        });
        console.log(resp.tag);
    });
}
init();
