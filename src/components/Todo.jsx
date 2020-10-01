
import React from "react";

export default props => (
  <div className="c-cb d-flex justify-content-between align-items-center" >
    <input  type="checkbox" checked={props.onChecked} />
    <div style={{ textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete} >
      {props.todo.text}
    </div>
    <button type="button" className="btn btn__danger" onClick={props.onDelete}>x</button>
  </div>
);