import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        const { item,test } = this.props;
        return(
            <li 
                // dangerouslySetInnerHTML={{__html:item}}
                onClick={this.handleClick}>{item} - {test}</li>
        )
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