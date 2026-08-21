"use strict";
// function useState(initialValue){
//     let value = initialValue;
Object.defineProperty(exports, "__esModule", { value: true });
//     function setValue(newValue){
//         value = newValue;
//     }
//     return [value, setValue];
// }
// const counter = useState(0);
// console.log(counter[0]); // Output: 0
// counter[1](5);
// console.log(counter[0]); // Output: 5
function useState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
useState(0);
useState("Hello");
useState(true);
useState({
    email: "john@example.com",
    isLoggedIn: true
});
useState(null);
//# sourceMappingURL=generics2.js.map