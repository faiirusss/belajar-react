import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="flex items-center">
                <h1 className="mr-5">{this.state.count}</h1>
                <button className="bg-black p-3 text-white"
                onClick={() => this.setState({ count: this.state.count + 1 })}
                >
                    +
                </button>
            </div>
        )
    }
}

export default Counter