
import React from "react";


 export default props => (
   <div className="c-cb d-flex justify-content-between align-items-center" >
     <input  type="checkbox" checked={props.onChecked} />
    <div className="listDiv" style={{ textDecoration: props.todo.complete ? "line-through" : ""}} onClick={props.toggleComplete} >
       {props.todo.text}
     </div>
     <button type="button" className="btn btn__danger" onClick={props.onDelete}>x</button>
   </div>
  );



// import React, { Component , Fragment} from 'react';
// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
      
//      }
//      this._handleClicks= this._handleClicks.bind(this)
//   }
//   componentWillMount = props => {
//     this.clickTimeout = null
//   }

//   _handleClicks = () => {
//     if (this.clickTimeout !== null) {
//       console.log('double click executes')
//       clearTimeout(this.clickTimeout)
//       this.clickTimeout = null
//     } else {
//       console.log('single click')  
//       this.clickTimeout = setTimeout(()=>{
//       console.log('first click executes ')
//       clearTimeout(this.clickTimeout)
//         this.clickTimeout = null
//       }, 2000)
//     }
//   }
//   render() { 
//     console.log("props",this.props)
//     let {keys,toggleComplete, onDelete, todo, onCheck} = this.props
//     return ( 
//       <Fragment>
//           <div className="c-cb d-flex justify-content-between align-items-center" >
//             <input  type="checkbox" onChecked={onCheck} />
//             <div style={{ textDecoration: todo.complete ? "line-through" : ""}} onClick={evt => this._handleClicks} >
//               {todo.text}
//             </div>
//             <button type="button" className="btn btn__danger" onClick={onDelete}>x</button>
//           </div>
//       </Fragment>
//      );
//   }
// }
 
// export default Todo;