import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item row todo" key={ todo.id }>
                    <i className="material-icons col check" 
                    onClick={ () => {deleteTodo(todo.id)} }>check_circle
                    </i>
                    <span className="col white-text">{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="center white-text">Yay! You're all done! Go chill now :)</p>
    )


    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos;