import {API} from '../backend'
import {ADD_TODO,FETCH_TODOS,DELETE_TODO,COMPLETE_TODO} from '../constants/constant'

export const postTodo=async(name,dispatch)=>{
    try{
        fetch(`${API}/`,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:JSON.stringify({name:name})
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            dispatch({type:ADD_TODO,value:res})
        })
        .catch((err)=>{
            throw err
        })
    }catch(err){
        throw err
    }
}

export const getAllTodos=async(dispatch)=>{
    try{
        fetch(`${API}/`,{
            headers:{
                'Accept': 'application/json',
            },
            method:'GET',
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            dispatch({type:FETCH_TODOS,value:res})
        })
        .catch((err)=>{
            throw err
        })
    }catch(err){
        throw err
    }
}

export const deleteTodo=async(id,dispatch)=>{
    try{
        fetch(`${API}/${id}/`,{
            method:'DELETE'
        })
        .then(()=>{
            dispatch({type:DELETE_TODO,value:id})
        })
        .catch((err)=>{
            throw err
        })
    }catch(err){
        throw err
    }
}

export const putTodo=async(todoItem,completed,dispatch)=>{
    try{
        fetch(`${API}/${todoItem._id}/`,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method:'PUT',
            body:JSON.stringify({name:todoItem.name,completed:completed})
        })
        .then((res)=>{
            dispatch({type:COMPLETE_TODO,value:{
                id:todoItem._id,
                completed:completed
            }})
        })
        .catch((err)=>{
            throw err
        })
    }catch(err){
        throw err
    }
}