export class todoList{
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public status: todoStatus) {
    }
}
export enum todoStatus{
    pending='Pending',
    completed='Completed',
}