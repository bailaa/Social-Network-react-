import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    like
                </button>
                {this.state.count}
            </div>
        );
    }
}

export default Likes;