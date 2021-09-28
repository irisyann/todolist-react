import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit } className="form">
                    <input type="text" className="addTodoInput" onChange={ this.handleChange } value={ this.state.content } placeholder="add new todo" maxLength="50"></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;