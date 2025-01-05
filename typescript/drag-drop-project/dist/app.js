"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
function AutoBind(_, _2, descriptor) {
    console.log('descropt', descriptor);
    console.log('_2', _2);
    console.log('_', _);
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // console.log(`Called ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
let ProjectInput = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _submitHandler_decorators;
    return _a = class ProjectInput {
            constructor() {
                this.templateElement = __runInitializers(this, _instanceExtraInitializers);
                this.templateElement = document.getElementById('project-input');
                this.hostElement = document.getElementById('app');
                const importedNode = document.importNode(this.templateElement.content, true);
                this.formElement = importedNode.firstElementChild;
                this.formElement.id = 'user-input';
                this.titleInputElement = this.formElement.querySelector('#title');
                this.descInputElement = this.formElement.querySelector('#description');
                this.peopleInputElement = this.formElement.querySelector('#people');
                this.attach();
                this.configure();
            }
            attach() {
                this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
            }
            submitHandler(event) {
                event.preventDefault();
                console.log(this.titleInputElement.value);
            }
            configure() {
                this.formElement.addEventListener('submit', this.submitHandler);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _submitHandler_decorators = [AutoBind];
            __esDecorate(_a, null, _submitHandler_decorators, { kind: "method", name: "submitHandler", static: false, private: false, access: { has: obj => "submitHandler" in obj, get: obj => obj.submitHandler }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const newProject = new ProjectInput();
