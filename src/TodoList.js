import React,{ Component,Fragment } from 'react';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
    }
    render() {
        return(
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                        id='insertArea'
                        className='input' 
                        type="text" 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange} />
                    <button 
                        onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return(<li 
                                    key={index} 
                                    onClick={this.handleButtonDelete.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:item}}></li>) 
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleButtonClick = () => {
        if(!this.state.inputValue) return;
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        });
    }
    handleButtonDelete(index) {
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}

export default TodoList;