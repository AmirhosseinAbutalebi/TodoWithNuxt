import {createTodoCommand} from "~/DTOs/CreateTodoCommand";
import {todoList, todoStatus} from "~/DTOs/Todo";

export const useTodo = () => {

    const todos:Ref<todoList[]> = ref([]);
    const addTodo = (addtodo:createTodoCommand)=> {
        const id = Math.floor((Math.random() * 100) + 1);
        todos.value.push(
            new todoList(id, addtodo.title, addtodo.description,todoStatus.pending)
        );
    }
    const deleteTodo = (id:number) => {
        var todo = todos.value.find(f=>f.id === id)
        if(todo) {
            todos.value = todos.value.filter(f=> f.id !== id);
            return;
        }
        alert("Todo not found");
    }
    const toggleStatus = (id:number) => {
        var todo = todos.value.find(f=>f.id === id)
        if(todo) {
            if(todo.status == todoStatus.pending)
                todo.status = todoStatus.completed;
            else
                todo.status = todoStatus.pending;
            return;
        }
        alert("Todo not found");
    }
    return {todos, addTodo, deleteTodo, toggleStatus}
}

