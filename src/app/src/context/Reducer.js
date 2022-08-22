import {ADD_TODO,DELETE_TODO,COMPLETE_TODO,FETCH_TODOS} from '../constants/constant'

const Reducer = (currState = {}, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { todoList: [...currState.todoList, action.value] };

      case FETCH_TODOS:
        return {todoList:[...action.value]}

      case DELETE_TODO:
        return {
          ...currState,
          todoList: currState.todoList.filter(
            (item) => item.id != action.value
          ),
        };
        
      case COMPLETE_TODO:
         let temp=[...currState.todoList]
         temp.map((item)=>{
             if(item.id==action.value.id){
                 item.completed=action?.value?.completed
             }
             return 1
         })
         return {todoList:temp}
      default:
        return currState;
    }
  };
  
  export default Reducer;