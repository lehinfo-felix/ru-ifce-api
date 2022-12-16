"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenuOnJson = void 0;
const fs_1 = __importDefault(require("fs"));
class GetMenuOnJson {
    async handle() {
        return JSON.parse(fs_1.default.readFileSync('./refeicoes.json').toString());
    }
    ;
}
exports.GetMenuOnJson = GetMenuOnJson;
//# sourceMappingURL=GetMenuOnJson.js.map