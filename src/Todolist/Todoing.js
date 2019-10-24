import React, { Component } from 'react'
export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行：{this.props.todo.length}</h1>
                <ul className="list">
                    {
                        this.props.todo.map(
                            (item,idx)=><li key={idx}>{item}
                        <input id='c' type='checkbox' onClick={(e)=>{this.props.complete(idx,e)}}/>
                        <button id='d' onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}
