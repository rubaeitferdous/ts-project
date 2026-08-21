"use strict";
// interface Response {
//     data: string | number | boolean | object | null;
//     status: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transaction successful",
    status: 200
};
const transactionStatus = {
    data: true,
    status: 200
};
const transactionAmount = {
    data: 1000,
    status: 200
};
function getLength(array) {
    return array.length;
}
getLength(["apple", "banana", "cherry"]); // returns 3
getLength([1, 2, 3, 4, 5]); // returns 5
getLength([true, false, true, 3, 5, "Himel"]); // returns 6
//# sourceMappingURL=generics.js.map