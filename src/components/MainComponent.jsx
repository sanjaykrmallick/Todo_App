import React, { Component, Fragment } from 'react';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            item : "",
            list: [],
         }
         this._handleChange = this._handleChange.bind(this);
         this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange= (e) => this.setState({item: e.target.value});

    _handleSubmit= (e) => {
        e.preventDefault();
        
        if(this.state.item === ""){
            
        }
        else{
            const item = {
                id: 1 + Math.random(),
                value: this.state.item
              };
          
              //copy current list of items
              const list = [...this.state.list];
              console.log(list)
          
              //add new item to the list
              list.push(item);
            this.setState({
                item: '',
                list: [...this.state.list, this.state.item]
              });
        }
    }

    deleteItem(id) {
        console.log(id);
        //copy list
        const list = [...this.state.list];
    
        //filter out deleted object
        //remember that the list (each object) gets assigned a value and id when its added to list
        const updatedList = list.filter(item => item.id !== id);
    
        //update state
        this.setState({ list: updatedList });
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
                    <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" placeholder="Add a new Todo ..." onChange={this._handleChange} value={this.state.item}/>
                    <button className="btn btn__primary btn__lg"  >Add</button>
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
            <ul  className="todo-list stack-large stack-exception list-group" aria-labelledby="list-heading">
                {/* {this.state.items!== [] ? <TodoListItem listValue={this.state.items}/> : <Fragment><h1>Null</h1></Fragment>} */}
                {this.state.list.map((item,key) => {
                    return (
                    <li className="todo stack-small" id={item.key}>
                        <div className="c-cb">
                            <input  value={item.text} onChange={(e)=>{this.setUpdate(e.target.value,item.key)}} type="checkbox" defaultChecked={false} />
                            <label className="todo-label" htmlFor="todo-0">{item}</label>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn">Edit <span className="visually-hidden">{item}</span></button>
                            <button type="button" className="btn btn__danger" onClick={() => this.deleteItem(item.id)} >Delete <span className="visually-hidden">{item}</span></button>
                        </div>
                    </li>
                    )
                })}
                {/* {this.state.list.map(item => {
                    return (
                        <li class="list-group-item list-group-item-light d-flex justify-content-between align-items-center" key={item.id}>
                            {item}
                            <button type="button" class="btn btn-danger" onClick={() => this.deleteItem(item.id)}>X</button>
                        </li>
                    );
                })} */}
            </ul>
        </div>
        </Fragment> 
        );
    }
}
 
export default MainComponent;