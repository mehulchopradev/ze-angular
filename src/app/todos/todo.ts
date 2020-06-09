export default class Todo {
    description: string;
    done: boolean;
    createdDate: Date;

    constructor(description: string, done: boolean = false,  createdDate: Date = new Date()) {
        this.description = description;
        this.done = done;
        this.createdDate = createdDate;
    }
}