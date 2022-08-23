import React,{useEffect} from 'react'
import TextInput from './components/text_input/TextInput'
import TodoCard from './components/todo_card/TodoCard';
import { useGlobalStateValue } from "./context/index";
import {getAllTodos} from './action/Todo'
import classes from './App.module.css'

const App = () => {

  const { state,dispatch } = useGlobalStateValue();
  const { todoList } = state;


  useEffect(()=>{
    try{
      getAllTodos(dispatch)
    }catch(err){
      console.log(err)
    }
  },[])
  
  console.log(state)
  return (
    <div className={classes.main__container}>
      <h1>Todo List!</h1>
      <TextInput/> 
      <div className={classes.todo__list}>
        {todoList.length>0 && 
        todoList.map((todoItem,index)=>(
          <TodoCard todoItem={todoItem} key={index}/>
        ))}  
      </div>
    </div>
  )
}

export default App