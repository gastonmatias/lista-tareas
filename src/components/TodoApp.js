import React, { useEffect, useReducer } from 'react'

import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

import '../styles.css'



const init = () => {
    /* carga de datos desde localStorage */
    return JSON.parse(localStorage.getItem('todos')) || [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: true
    }]
}

export const TodoApp = () => {
    /* 
    todos: hace referencia al "state" retornado por todoReducer
    dispatch: es una fx qe recibe la action
    todoReducer: fx qe hace de reducer
    
    []: array qe contiene el initialState
    init: computa el estado inicial para qe funcione mas rapido el componente,
    reemplazaria al "initialState" 
    */
    const [todos, dispatch] = useReducer(todoReducer, [],init)
    
    /*  useEffect para guardar cualquier cambio que suceda en los todos,
    los almacena todos en localStorage */
    useEffect(() => {      
        localStorage.setItem('todos',JSON.stringify(todos))/* localstorage solo almacena string, necesidad de parsear los todos */
    },[todos])

    /* borrar todo */
    const handleDelete = (todoId) => {
        const action = {
            type:'delete',
            payload: todoId
        }

        dispatch(action)
    }

    /* tachar todo */
    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload: todoId

        })
    }

    /* agregar todo */
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }
 
  
    return (
    <div className='container'>
        <h1>Lista de Tareas: ({todos.length})</h1>
        <hr/>
            
        <div className='listado row justify-content-around' >
            
            {/* columna de to do's */}
            <div className='col-7'>
                {/* Componente TodoList(todos,handleDelete, handleTogle)
                TodoList padre SOLO manda las fxs handle al hijo todoListItem
                */}
                <TodoList
                todos={todos} 
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                />
            </div>

              {/* columna de agregar nuevo to do */}
            <div className='agregar col-4'>
                <TodoAdd 
                handleAddTodo={handleAddTodo}
                />
            </div>
        
        {/* fin row */}
        </div>       
    </div>
  )
}
