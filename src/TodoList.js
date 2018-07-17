import React,{ Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    state = {
        inputValue:'',
        list:[]
    }
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleButtonDelete = this.handleButtonDelete.bind(this);
    }
    render() {
        console.log('render...');
        return(
            <Fragment>
                <div className='todolist'>
                    <label htmlFor="insertArea"> 输入内容: </label>
                    <input 
                        id='insertArea'
                        className='input' 
                        type="text" 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}} />
                    <button 
                        onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul className='showList' ref={(ul) => {this.ul=ul}}>
                    { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        // let value = e.target.value;
        let value = this.input.value;
        this.setState( () =>({
                inputValue: value
            })
        );
    }
    handleButtonClick() { 
        if(!this.state.inputValue) return;
        this.setState((prevstate) => ({
                list: [...prevstate.list,prevstate.inputValue],
                inputValue: ''
            }),()=>{
                console.log(this.ul.querySelectorAll('div').length,'length');
            }
        );
        // setState(()=>{}) 箭头函数是异步执行
        console.log(this.ul.querySelectorAll('div').length,'length');
    }
    handleButtonDelete(index) {
        this.setState(() => {
            const list = [...this.state.list];
            list.splice(index,1);
            return {
                list: list
            }
        })
    }
    getTodoItem() {
        return this.state.list.map((item,index) => {
            return(
                <div key={index}>
                    {/*<li 
                        key={index} 
                        onClick={this.handleButtonDelete.bind(this,index)}
                        dangerouslySetInnerHTML={{__html:item}}></li>*/}
                    <TodoItem item={item} index={index} handleButtonDelete={this.handleButtonDelete}  />
                </div>
            ) 
        })
    }
}

export default TodoList;