//generic
var countAndDescribe = function (element) {
    var descText = "Got no value";
    if (element.length > 0) {
        descText = "Got ".concat(element.length, " elements");
    }
    return [element, descText];
};
countAndDescribe(["", ""]);
countAndDescribe("test");
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
var mergeObj = merge({ age: 2 }, { name: "max" });
console.log("mergeObj.name", mergeObj.name);
// const names: Array<string> = [];
// // index types
// interface ErrorContainer {
//   [key: string]: string;
// }
// const errorContainer: ErrorContainer = {};
// //type casting
// const userInput = document.querySelector("user-input")! as HTMLInputElement;
// userInput.value = "some random text";
// interface Greetable {
//   name: string;
//   age: number;
// }
// const obj: Greetable = {
//   name: "",
//   age: 24,
// };
// type Admin = {
//   name: string;
//   privileges: Array<number>;
// };
// type Employess = {
//   name: string;
//   startDate: Date;
// };
// type ElvatedTypes = Admin & Employess;
// type UnknownEmpTypes = Admin | Employess;
// const el: ElvatedTypes = {
//   name: "",
//   privileges: [],
//   startDate: new Date(),
// };
// const printEmp = (emp: UnknownEmpTypes) => {
//   if ("privileges" in emp) {
//     console.log(emp.privileges);
//   }
// };
