import React, { Component , Fragment} from 'react';

export default class TodoForm extends Component {
    state = {
      text: ""
    };
  
    _handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    };
  
    _handleSubmit = event => {
      event.preventDefault();
      if((this.state.text.trim() ==="") || (this.state.text.trim().length===0)){
        
      }
      else{
        this.props.onSubmit({
          id: Date.now(),
          text: this.state.text,
          complete: false
        });
        this.setState({
          text: ""
        });
      }
    };
  
    render() {
      return (
          <Fragment>
              <form onSubmit={this._handleSubmit}>
                <h2 className="label-wrapper">
                  <label htmlFor="new-todo-input" className="label__lg">What needs to be done?</label>
                </h2>
                <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" placeholder="Add a new Todo ..."  value={this.state.text} onChange={this._handleChange}/>
                <button className="btn btn__primary btn__lg"  onClick={this._handleSubmit}>Add</button>
              </form>
          </Fragment>
      );
    }
  }