export default class TaskModel{
    constructor(id,title,desc,dueDate){
        this.id=id;
        this.title=title;
        this.desc=desc;
        this.dueDate=dueDate;
    }
    //function to retrieve all tasks
    static getAll(){
        return tasks;
    }
    //function to add new task where id will be randomly generated
    static add(title,desc,dueDate){
        const id=Math.round(Math.random()*1000);
        tasks.push(new TaskModel(id,title,desc,dueDate));
    }
    //function to delete a task based on title
    static delete(title){
        const index=tasks.findIndex((t)=>t.title==title);
        tasks.splice(index,1);
    }
    //function to filter a task based on id
    static getById(id){
        return tasks.find((t)=>t.id==id);
        
    }
    //function to update task
    static update(taskObj){
        const index=tasks.findIndex((t)=>t.id==taskObj.id);
        tasks[index]=taskObj;
    }
}
var tasks=[];