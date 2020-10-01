import React, { Component, Fragment } from 'react';
import TodoForm from "./TodoForm"
import Todo from "./Todo"

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            todos: [],
            todoToShow: "all",
            toggleAllComplete: true,
            focus: false
         }
        //  this._addItem = this._addItem.bind(this);
    }

    _addTodo = todo => {
        this.setState(state => ({
          todos: [todo, ...state.todos],
          checked: false,
        }));
      };
    
      _toggleComplete = id => {
        this.setState(state => ({
          todos: state.todos.map(todo => {
            if (todo.id === id) {
              // suppose to update
              return {
                ...todo,
                complete: !todo.complete,
                checked: !todo.checked,
                focus: false
              };
            } else {
              return todo;
            }
          })
        }));
      };
    
      _updateTodoToShow = s => {
        this.setState({
          todoToShow: s
        });
      };
    
      _handleDeleteTodo = id => {
        this.setState(state => ({
          todos: state.todos.filter(todo => todo.id !== id)
        }));
      };
    
      _removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
          todos: state.todos.filter(todo => !todo.complete && !todo.checked)
        }));
      };

    render() { 
        let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete && !todo.checked);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete && todo.checked);
    }


        return ( 
        <Fragment>
            <div className="todoapp stack-large">
                    <h1>Todos</h1>
                <TodoForm onSubmit={this._addTodo} />

                <div className="filters btn-group stack-exception">
                     <button type="button" className="btn toggle-btn" aria-pressed="true" onClick={() => this._updateTodoToShow("all")}>
                         <span className="visually-hidden">Show </span>
                         <span>all</span>
                        <span className="visually-hidden"> tasks</span>
                     </button>
                     <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => this._updateTodoToShow("active")}>
                        <span className="visually-hidden">Show </span>
                         <span>Active</span>
                         <span className="visually-hidden"> tasks</span>
                     </button>
                    <button type="button" className="btn toggle-btn" aria-pressed="false" onClick={() => this._updateTodoToShow("complete")}>
                         <span className="visually-hidden">Show </span>
                         <span>Completed</span>
                         <span className="visually-hidden"> tasks</span>
                     </button>
                </div>
                <h2 id="list-heading">Tasks remaining : {this.state.todos.filter(todo => !todo.complete).length}</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn toggle-btn" 
                        onClick={() => this.setState(state => ({
                             todos: state.todos.map(todo => (
                                 {...todo, complete: state.toggleAllComplete, checked: state.toggleAllComplete})),
                                 toggleAllComplete: !state.toggleAllComplete}))}>
                        toggle all complete: {`${this.state.toggleAllComplete}`}
                    </button>
                    {this.state.todos.some(todo => todo.complete) ? (
                    <div>
                        <button className="btn toggle-btn" onClick={this._removeAllTodosThatAreComplete}>
                            remove all complete todos
                        </button>
                    </div>
                ) : null}
                </div>
                
                {todos.map(todo => (
                    <Todo 
                        key={todo.id}
                        toggleComplete={() => this._toggleComplete(todo.id)}
                        onDelete={() => this._handleDeleteTodo(todo.id)}
                        todo={todo}
                        onChecked={todo.checked}
                    />
                ))}
            </div>    
        </Fragment>
         );
    }
}
 
export default MainComponent;