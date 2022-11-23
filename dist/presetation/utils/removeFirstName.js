"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFirstName = void 0;
const removeFirstName = (data) => {
    return data.map((el) => {
        return {
            name: el.name.replace('Refeição : ', ''),
            description: el.description.replace('Descrição : ', ''),
            startTime: new Date(el.startTime.replace('Horário de inicio : ', '')),
            endTime: new Date(el.endTime.replace('Horário de fim : ', ''))
        };
    });
};
exports.removeFirstName = removeFirstName;
