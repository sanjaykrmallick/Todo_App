// import React, { Fragment } from 'react';
// import { withRouter } from "react-router-dom";

// const TodoListItem = (props) => {

//     console.log(props)
//     const items = props;

    
    
//     // return <ul>
//     // {
//     //   props.items.map((item, index) => <li key={index}>{item}</li>)
//     // }
//     // </ul>

//     return ( 

//                     
//      );
// }
 
// export default TodoListItem;

//  import React, {Component, Fragment } from 'react';

//  class TodoListItem extends Component {
//      constructor(props) {
//          super(props);
//          this.state = {  }
//      }
//      render() { 
//          console.log(props)
//        const itemss= props.items.map((e,key) =>{
//                                 return(
//                                      <Fragment>
//                                          <li className="todo stack-small" key={key}>
//                                              <div className="c-cb">
//                                                  <input id="todo-0 {item.key}" value={e.text} onChange={(e)=>{props.setUpdate(e.target.value,e.key)}} type="checkbox" defaultChecked={true} />
//                                                  <label className="todo-label" htmlFor="todo-0">{e.text}</label>
//                                              </div>
//                                              <div className="btn-group">
//                                                  <button type="button" className="btn">Edit <span className="visually-hidden">Eat</span></button>
//                                                  <button type="button" className="btn btn__danger" onClick={() => {props.deleteItem(e.key)}} >Delete <span className="visually-hidden">Eat</span></button>
//                                              </div>
//                                          </li>
//                                      </Fragment>           
//                                 )      
//                               })
//          return ( 
//              <Fragment>
//                  <itemss/>
//              </Fragment>
//           );
//      }
//  }
  
//  export default TodoListItem;










 
import React, { Fragment } from 'react';

const TodoListItem = (props) => {
    const items = props.items;
    const listItems = items.map((item) =>{
       return      <li className="todo stack-small" key={item.key}>
                    <div className="c-cb">
                        <input id="todo-0 {item.key}" value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}} type="checkbox" defaultChecked={true} />
                        <label className="todo-label" htmlFor="todo-0">{item.text}</label>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn">Edit <span className="visually-hidden">{item.value}</span></button>
                        <button type="button" className="btn btn__danger" onClick={() => {props.deleteItem(item.key)}} >Delete <span className="visually-hidden">Eat</span></button>
                    </div>
                </li>
     })
    return ( 
        <Fragment>
            <listItems/>
        </Fragment>
     );
}
 
export default TodoListItem;
