import React, { Component } from 'react'
export default class Finished extends Component {
    render() {
        return (
            <div>
                <h1>已经完成：{this.props.finished.length}</h1>
                <ul className="list">
                    {
                        this.props.finished.map(
                            (item,idx)=><li key={idx}>{item}
                        <input id='c' type='checkbox' checked="checked" onClick={(e)=>this.props.doing(idx,e)}/>
                        <button id='d' onClick={()=>{this.props.delTodo(idx)}}>删除</button></li>)
                    }
                </ul>
            </div>
        )
    }
}