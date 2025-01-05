function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    console.log('descropt', descriptor)
    console.log('_2', _2)
    console.log('_', _)
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        // console.log(`Called ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };
    return descriptor;
}

class ProjectInput{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    formElement: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descInputElement: HTMLTextAreaElement;
    peopleInputElement: HTMLInputElement;
    
    constructor(){
        this.templateElement = document.getElementById('project-input') as HTMLTemplateElement;
        this.hostElement = document.getElementById('app') as HTMLDivElement;
        
        const importedNode = document.importNode(this.templateElement.content, true)
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.formElement.id = 'user-input'
        
        this.titleInputElement = this.formElement.querySelector('#title') as HTMLInputElement;
        this.descInputElement = this.formElement.querySelector('#description') as HTMLTextAreaElement;
        this.peopleInputElement = this.formElement.querySelector('#people') as HTMLInputElement;
        
        this.attach()
        this.configure()
    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement)
    }

    @AutoBind
    private submitHandler(event: Event){
        event.preventDefault()
        console.log(this.titleInputElement.value)
    }

    private configure(){
        this.formElement.addEventListener('submit', this.submitHandler)
    }
}

const newProject = new ProjectInput()