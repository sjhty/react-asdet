import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    // handleClick = () => {
    //     this.setState({
    //         count: ++this.state.count
    //     })
    // }

    handleClick() {
        this.setState({
            count: ++this.state.count
        })
    }

    render () {
        return (
            <div>
                <p>this is Home page</p>
                <p>当前计数：{this.state.count}</p>
                <button onClick={() => this.handleClick()}>增加</button>
            </div>
        )
    }
}