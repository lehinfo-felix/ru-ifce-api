"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFirstName = void 0;
const removeFirstName = (data) => {
    const today = new Date();
    const todayPtBr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}T`;
    return data.map((el) => {
        const timeStart = el.startTime.replace('Horário de inicio : ', '');
        const timeEnd = el.endTime.replace('Horário de fim: ', '');
        console.log(`${todayPtBr}${timeEnd}`);
        return {
            name: el.name.replace('Refeição : ', ''),
            description: el.description.replace('Descrição : ', ''),
            startTime: new Date(`${todayPtBr}${timeStart}`).toString(),
            endTime: new Date(`${todayPtBr}${timeEnd}`).toString(),
        };
    });
};
exports.removeFirstName = removeFirstName;
//# sourceMappingURL=removeFirstName.js.map