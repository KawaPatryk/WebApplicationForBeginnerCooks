import _ from "lodash";

export const qtyChange = (data, id, type, value) => {
    let newData = _.cloneDeep(data);
    let newElem = _.find(newData, elem => elem.id === id);
    if (type === "inc") newElem.quantity = newElem.quantity + 1;
    else if (type === 'dec' && newElem.quantity !== 0) newElem.quantity = newElem.quantity - 1;
    else if (type === 'input') newElem.quantity = Number(value);
    console.log(newData)
    return newData;
} 