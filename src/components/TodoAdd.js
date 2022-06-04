import React from 'react'
import { useForm } from '../hooks/useForm'


export const TodoAdd = ({handleAddTodo}) => {

 /* se hará uso del custom hook useForm,
    useForm retorna un array [values, handleInputChange], 
    y recibe como parametro un initialState de objeto vacio
    
    useForm( {} ){
        ...
        return [values, handleInputChange]
    }

    */
    const [{description}, handleInputChange,reset] = useForm({
        description: ''
    })    

    const handleSubmit = (e) => {
        e.preventDefault()

        /*  valida qe el input no este vacio */
        if (description.trim().length<=1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo)
        reset()
    }

  return (
    <>
        <h4>Agregar Tarea</h4>
        <hr/>

        <form onSubmit={handleSubmit} >
            <input
                type='text' 
                name='description'
                className='form-control'
                placeholder='Escriba aqui'
                autoComplete='off'
                value={description}
                onChange={handleInputChange}
            >
            </input>  
            <button
                id='btn-agregar'
                type='submit'
                className='btn btn-outline-primary mt-1 btn-block'
            >
                {/* google font agregar task */}
                <span className="material-icons">
                add_task
                </span>
            </button>
        </form>
    </>
  )
}
