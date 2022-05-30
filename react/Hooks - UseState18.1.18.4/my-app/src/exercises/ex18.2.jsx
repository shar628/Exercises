import React , {useState} from 'react'
import {todos as initialTodos } from '../utils/constants/todos'

function Ex18_2() {
const [todos, setTodos] =  useState(initialTodos)
const handleTodo =(index)=>{
    // console.log(todos[index].name);
    // const newTodos = todos.map((todo,i)=>{
    //     if(i===index){
    //         return{...todo, completed: !todo.completed}
    //     }
    //     return todo
    // })
    // setTodos(newTodos)
    setTodos((prev)=>
    prev.map((todo,i)=>{
        if(i===index){
            return{...todo, completed: !todo.completed}
        }
        return todo
    })
    )
};

const insertTodo = ()=>{
    return todos.map((todo,index)=>{
        return (<div key={todo.name}    >{todo.name}
        <span onClick={()=>handleTodo(index)} > 
        {todo.completed? <> &#86; </>:<> &#88;</> }
          </span>
         </div>)
    })
}

  return (
    <div >Ex18_2!!!
        {insertTodo()}
    </div>
  )
}

export default Ex18_2