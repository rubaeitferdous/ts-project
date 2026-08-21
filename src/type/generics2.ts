
// function useState(initialValue){
//     let value = initialValue;

//     function setValue(newValue){
//         value = newValue;
//     }
//     return [value, setValue];
// }

// const counter = useState(0);

// console.log(counter[0]); // Output: 0
// counter[1](5);
// console.log(counter[0]); // Output: 5




function useState<T>(initialValue: T):[T, (newValue: T) => void]{
    let value = initialValue;

    function setValue(newValue: T){
        value = newValue;
    }
    return [value, setValue];
}

useState<number>(0);
useState<string>("Hello");
useState<boolean>(true);

interface user{
    email: string;
    isLoggedIn: boolean;
}

useState<user | null>({
    email: "john@example.com",
    isLoggedIn: true
});

useState<user | null>(null);