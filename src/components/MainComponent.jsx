import React, { Component, Fragment } from 'react';

import TodoListItem from "./TodoListItem"

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : "",
            items: [],
         }
         this._handleChange = this._handleChange.bind(this);
         this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange= (e) => this.setState({data: e.target.value});

    _handleSubmit= (e) => {
        e.preventDefault();
        
        if(this.state.data === ""){
            
        }
        else{
            this.setState({
                data: '',
                items: [...this.state.items, this.state.data]
              });
        }
    }


    render() { 
        return ( 

        <Fragment>
            <div className="todoapp stack-large">
                <h1>Todos</h1>
                <form onSubmit={this._handleSubmit}>
                    <h2 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">What needs to be done?</label>
                    </h2>
                    <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" placeholder="Add a new Todo ..." onChange={this._handleChange} value={this.state.data}/>
                    <button className="btn btn__primary btn__lg">Add</button>
                </form>
                <div className="filters btn-group stack-exception">
                    <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>all</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
                <button type="button" className="btn toggle-btn" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
            </div>
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul  className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
            {/* <li className="todo stack-small">
                    <div className="c-cb">
                        <input id="todo-0" type="checkbox" defaultChecked={true} />
                        <label className="todo-label" htmlFor="todo-0">Eat</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">Edit <span className="visually-hidden">Eat</span></button>
                        <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">Eat</span></button>
                    </div>
                </li>
                <li className="todo stack-small">
                    <div className="c-cb">
                        <input id="todo-1" type="checkbox" />
                        <label className="todo-label" htmlFor="todo-1">Sleep</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">Edit <span className="visually-hidden">Sleep</span></button>
                        <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">Sleep</span></button>
                    </div>
                </li>
                <li className="todo stack-small">
                    <div className="c-cb">
                        <input id="todo-2" type="checkbox" />
                        <label className="todo-label" htmlFor="todo-2">Repeat</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">Edit <span className="visually-hidden">Repeat</span></button>
                        <button type="button" className="btn btn__danger">Delete <span className="visually-hidden">Repeat</span></button>
                    </div>
                </li> */}
                {this.state.items!== [] ? <TodoListItem listValue={this.state.items}/> : <Fragment><h1>Null</h1></Fragment>}
            </ul>
        </div>
        </Fragment> 
        );
    }
}
 
export default MainComponent;