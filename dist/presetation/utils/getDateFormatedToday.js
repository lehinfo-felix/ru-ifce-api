"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayPtBr = void 0;
const getTodayPtBr = () => {
    const today = new Date();
    return `${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`;
};
exports.getTodayPtBr = getTodayPtBr;
//# sourceMappingURL=getDateFormatedToday.js.map