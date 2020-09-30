import React, { Component , Fragment} from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{height: '65px'}}>
                    <a className="navbar-brand navbar_Brand" href="/#">ToDo App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/#">Todo List <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Remainder</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
         );
    }
}
 
export default HeaderComponent;