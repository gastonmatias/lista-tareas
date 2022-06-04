import React from 'react'


export const TodoListItem = ({todo,index,handleDelete,handleToggle}) => {
  
  return (
    <li
       className={`list-group-item ${ todo.done && 'complete' }`}
       onClick={() => handleToggle(todo.id)}
     >
  
       <p>{index+1}{')'} {todo.desc}</p>
         
         {/* para borrar */}
         <button 
            className='btn btn-danger'
            
            onClick={() =>  handleDelete(todo.id)
            }
            
        >
          {/* icono google font */}
          <i className="material-icons">delete</i>
        
         </button>

    </li>
  )
}
