import React,{ Component } from 'react';

class Test extends Component {
    render() {
        const { item } = this.props;
        return(
            <span>
                { item }
            </span>
        )
    }
}

export default Test;