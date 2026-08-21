// interface Response {
//     data: string | number | boolean | object | null;
//     status: number;
// }

interface Response<T> {
    data: T;
    status: number;
}

const transactionResponse: Response<string> = {
    data: "Transaction successful",
    status: 200
};

const transactionStatus: Response<boolean> = {
    data: true,
    status: 200
};

const transactionAmount: Response<number> = {
    data: 1000,
    status: 200
};

function getLength<item>(array: item[]): number {  //generics
    return array.length;
}

getLength<string>(["apple", "banana", "cherry"]); // returns 3
getLength<number>([1, 2, 3, 4, 5]); // returns 5
getLength([true, false, true, 3, 5, "Himel"]); // returns 6