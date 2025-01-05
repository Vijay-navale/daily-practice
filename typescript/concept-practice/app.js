//generic
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var Logger = function (constructor) {
    console.log('logger');
};
var Person = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person = _classThis = /** @class */ (function () {
        function Person_1() {
        }
        return Person_1;
    }());
    __setFunctionName(_classThis, "Person");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
}();
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
// console.log("mergeObj.name", mergeObj.name);
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
