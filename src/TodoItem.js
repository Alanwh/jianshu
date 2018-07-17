import React,{ Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { item } = this.props;
        return(
            <li 
                dangerouslySetInnerHTML={{__html:item}}
                onClick={this.handleClick}></li>
        )
    }
    handleClick() {
        const {handleButtonDelete,index} = this.props;
        handleButtonDelete(index);
    }
}

export default TodoItem;