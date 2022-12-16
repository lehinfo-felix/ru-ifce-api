"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = void 0;
const isWeekend = () => {
    const day = new Date().getDay();
    if (day === 6 || day === 7)
        return true;
    return false;
};
exports.isWeekend = isWeekend;
//# sourceMappingURL=isWeekend.js.map