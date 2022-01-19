import React from 'react'

export const TodoList = ({children}) => {
    return (
        <div className='List'>
            <ul className='List__item'>
                {children}
            </ul>            
        </div>
    )
}
