
/* Reducer 
Controla los TODOS
parametros:
state:  array de valores (inicialmente vacio)
action: manejo de tipo de acción qe se aplicara al state

retorna: el nuevo estado del array state

*/
export const todoReducer = (state=[],action) => {
    switch (action.type) {
        /* agregar un nuevo todo */
        case 'add':
            return [...state,action.payload]
        
        /* borrar */
        case 'delete':
            return state.filter((todo) => todo.id !== action.payload)
        

        /* tachar como "realizado", forma corta*/            
        case 'toggle':
            return state.map(todo => 
                /* return implicito + ternario*/
                (todo.id===action.payload) ? 
                    {...todo, done: !todo.done} 
                    :todo
            )
        
        /* tachar como "realizado" , forma larga*/            
        case 'toggle-old':
            return state.map((todo) => {
                
                if (todo.id===action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }else {
                    return todo;
                }
            })
    
        default:
            return state;
    }
}