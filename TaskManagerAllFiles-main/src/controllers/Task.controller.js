import TaskModel from "../models/Task.model.js";

export default class TaskController{
    index(req,res){
        res.render('home');
    }
    getTasks(req,res){
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
    //middleware to add task
    addTask(req,res){
        res.render('addTask');
    }
    //middleware after adding task
    postAddTask(req,res){
        const {title,desc,dueDate}=req.body;
        TaskModel.add(title,desc,dueDate);
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
    //middleware to delete a particular task
    delete(req,res){
        const title=req.params.title;
        TaskModel.delete(title);
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
    //middleware to update a particular task based on id
    update(req,res){
        const id=req.params.id;
        const taskFound=TaskModel.getById(id);
        res.render('updateTask',{task:taskFound});    
    }
    //middleware after updating a particular task
    postUpdate(req,res){
        TaskModel.update(req.body);
        const tasks=TaskModel.getAll();
        res.render('tasks',{tasks});
    }
}