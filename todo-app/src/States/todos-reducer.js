import { createSlice } from "@reduxjs/toolkit";
const todos = localStorage.getItem('todosLists')
console.log(todos)
let todosLists = []
if(todos){
     todosLists = JSON.parse(todos)
}


const todosSlice = createSlice({
    initialState:{todosLists:todosLists},  // [{id:'unique name' , todos:[{id:'uniqueid' , title:'todo' ,description:'tododescription', isDone:false}]}]
    name:'todos',
    reducers:{
        createNewTodoList(state , action){
            state.todosLists.push(action.payload);
        },
        addNewTodo(state , action){  // action will be{id:'list name' , todo:{}}
            const index = state.todosLists.findIndex((item)=>item.id===action.payload.id);
            state.todosLists[index].todos.push(action.payload.todo)
        },
        editTodos(state , action){
            const indexofList = state.todosLists.findIndex((item)=>item.id===action.payload.listId);
            const indexofTodo = state.todosLists[indexofList].todos.findIndex(item=>item.id===action.payload.id)
            state.todosLists[indexofList].todos[indexofTodo] = action.payload.todo

        }
    }
})

export const {createNewTodoList , addNewTodo ,editTodos} = todosSlice.actions;
const todoReducer = todosSlice.reducer ;
export default todoReducer ;