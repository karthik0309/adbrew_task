import React,{useState} from 'react'
import {postTodo} from '../../action/Todo'
import {useGlobalStateValue} from '../../context/index'
import classes from './TextInput.module.css'

const TextInput = () => {
  const {dispatch} = useGlobalStateValue()
  const [todo,setTodo] = useState("");

  const handleTodoChange=(event)=>{
    setTodo(event.target.value)
  }
  
  const onSubmit=()=>{
    try{
      postTodo(todo,dispatch)
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div className={classes.input__container}>
        <input type="text" 
        className={classes.text__input} 
        placeholder="Enter todo"
        onChange={e=>handleTodoChange(e)}
        value={todo}/>

        <button className={classes.submit} onClick={onSubmit}>
            Add Todo
        </button>
    </div>
  )
}

export default TextInput