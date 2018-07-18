import React,{ Component,Fragment } from 'react';
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleButton = this.handleButton.bind(this);
    }
    render() {
        return(
           <Fragment>
               <div className = {this.state.show ? 'show' : 'hide'}>hello</div>
               <span className = {this.state.show ? 'showAni' : 'hideAni'}>hello</span>
               <hr/>
               <button onClick={this.handleButton}>toggle</button>
               
           </Fragment>
        )
    }
    handleButton() {
        this.setState(()=>({
            show: !this.state.show
        }))
    }
}

export default App;