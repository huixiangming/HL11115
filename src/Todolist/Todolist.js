import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Finished from './Finished';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo: ['打王者','吃饭'],
            finished: ['学习']
        }
        // var arr = [1,2,{a:100}];// 深拷贝// var b = JSON.parse(JSON.stringify(arr));// b[2].a = 200;// console.log(arr);
        // 对象的拷贝//var a= {a:100,b:200};// var o = Object.assign({},a);// console.log(o===a);// console.log(o);
        // Object.keys返回由属性名组成的一个数组//Object.keys(a).forEach((item)=>{//console.log(item);//console.log(a[item]);
        //})// 尽量不用for in// for(var item in a){//     console.log(a);// }
    }
    //添加
    addItem = (msg)=>{
        // this.state.todo.push(msg)
        // console.log(this.state.todo)
        this.setState({
            todo: [...this.state.todo,msg]
        })  
    }
    //删除未完成
    delitem = (a)=>{
        // this.state.todo.splice(a,1); //不要写
        // 深拷贝\浅拷贝
        // 状态（state）：
        // 1、不要直接改变、处理状态
        var todo= [...this.state.todo];
        todo.splice(a,1);
        // 2、setState是异步的
        this.setState(
            {todo:todo}
        )
    }
    //删除已完成
    delitemed = (a)=>{
        var finished =[...this.state.finished];
        finished.splice(a,1);
        this.setState({
            finished:finished
        })
    }
    //上切到下
    comdix = (a,e)=>{
        var todo =[...this.state.todo];
        var finished=[...this.state.finished,this.state.todo[a]];
        todo.splice(a,1);
        this.setState({
            todo:todo,
            finished:finished
        })
        e.target.checked = false;
    }
    //下切到上
    doingdix = (a)=>{
        var todo=[...this.state.todo,this.state.finished[a]];
        var finished =[...this.state.finished];
        finished.splice(a,1);
        this.setState({
            todo:todo,
            finished:finished   
        })
    }
    //存储到本地
    componentDidMount(){
        var todo = JSON.parse(localStorage.getItem('todo'));
        var finished = JSON.parse(localStorage.getItem('finished'));
        if(todo){
            this.setState({
                todo: [...todo]
            });
        }
        if(finished){
            this.setState({
                finished: [...finished]
            });
        }
    }
    //本地存储
    componentDidUpdate(){
        localStorage.setItem("todo",JSON.stringify(this.state.todo));
        localStorage.setItem("finished",JSON.stringify(this.state.finished));
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo={this.state.todo} delTodo={this.delitem}  complete={this.comdix}/>
                <Finished doing={this.doingdix} delTodo={this.delitemed} finished={this.state.finished}/>
            </div>
        )
    }
}