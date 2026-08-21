

let value: unknown;

// value.toUpperCase();
// value.toFixed();

let myValue = value as string;
const appi = myValue.toUpperCase();

const yourValue = value as number;
yourValue.toFixed();

let data : unknown;
interface User {
    name : string;
    email: string;

}

const userData = data as User;
userData.name;


//as const

const kamaruzzaman:User = {
    name : "kamaruzzaman",
    email: "kam@switzerland.com"
} as const;  //makes it readonly. cant change.


// kamaruzzaman.name = "bogda kamru";

