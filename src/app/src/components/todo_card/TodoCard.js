import React,{useState,useEffect} from 'react'
import {deleteTodo,putTodo} from '../../action/Todo'
import {useGlobalStateValue} from '../../context/index'
import DeleteIcon from '../../assets/delete.png'
import classes from './TodoCard.module.css'

const TodoCard = ({todoItem}) => {

  const {dispatch} = useGlobalStateValue()
  const [complete,setComplete] = useState(false)

  const handleDelete=()=>{
    try{
      deleteTodo(todoItem.id,dispatch)
    }catch(err){
      console.log(err)
    }
  }

  const handleComplete=(e)=>{
    try{
      putTodo(todoItem,!complete,dispatch)
      setComplete(!complete)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    setComplete(todoItem.completed)
  },[todoItem])

  return (
    <div className={classes.card__container}>
        <p className={classes.todo__title} style={todoItem.completed ? {color:"red",textDecoration:"line-through"} : null}>
            {todoItem.name}
        </p>
        
        <div className={classes.operations}>
            <input type="checkbox"  onChange={e=>handleComplete(e)} checked={complete}/>
            <button className={classes.todo__delete} onClick={handleDelete}>
                <img src={DeleteIcon} alt="trash" />
            </button>
        </div>
    </div>
  )
}

export default TodoCard