import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Test from './test';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        console.log('child render...');
        const { item,test } = this.props;
        return(
            <li 
                // dangerouslySetInnerHTML={{__html:item}}
                onClick={this.handleClick}>{item} - {test} - <Test item={item} /> </li>
        )
    }
    componentWillReceiveProps() {
        console.log('child component WillReceiveProps');
    }
    shouldComponentUpdate(nextProps,nextState) {
        if (nextProps.item !== this.props.item) {
            return true;
        } else {
            return false;
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleClick() {
        const {handleButtonDelete,index} = this.props;
        handleButtonDelete(index);
    }
}

TodoItem.propTypes = {
    item: PropTypes.string,
    handleButtonDelete: PropTypes.func,
    index: PropTypes.number,
    test: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}
TodoItem.defaultProps = {
    test: 'test'
}

export default TodoItem;