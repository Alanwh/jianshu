import React,{ Component } from 'react';
import { Input,Button,List  } from 'antd';
import store from './store';
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_INPUT_VALUE}  from './store/ActionTypes';
import 'antd/dist/antd.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(()=>{
            this.setState(store.getState());
        });
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    render() {
        return(
            <div style={{margin:10}}>
                <Input 
                    placeholder="todo list" 
                    value={this.state.inputValue} 
                    style={{width: 300,marginRight:10}} 
                    onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                    style={{width:300,marginTop:10}}
                />
            </div>
        )
    }
    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action);
        
    }
    handleButtonClick() {
        const action = {
            type: ADD_TODO_ITEM
        }
        store.dispatch(action);
    }
    handleItemDelete(index) {
        const action = {
            type: DELETE_INPUT_VALUE,
            index
        }
        store.dispatch(action);
    }
}

export default App;