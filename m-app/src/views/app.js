import React, { Component } from 'react';

import Item from './item'
import Footer from './footer'

function bind(self){
    return function(...rest){
        rest.forEach( (item) =>{
            self[item] = self[item].bind(self)
        } )
    }
}

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: this.props.list,
            nowShowing: 'all'
        }
        
        let arr = [
            'toggleCheckbox',
            'toggleAllCheckbox',
            'editDone',
            'addItemHandle',
            'hashChangHandle',
            'clearAll'
        ]
        bind(this)(...arr)

        //this.toggleCheckbox = this.toggleCheckbox.bind(this)
        //this.toggleAllCheckbox = this.toggleAllCheckbox.bind(this)
        //this.editDone = this.editDone.bind(this)
        //this.destroy = this.destroy.bind(this)
        //this.addItemHandle = this.addItemHandle.bind(this)
        //this.hashChangHandle = this.hashChangHandle.bind(this)
        //this.clearAll = this.clearAll.bind(this)
    }

    // 勾选单个checkbox
    toggleCheckbox(id){
        let {list} = this.state;

        list.forEach(function(item){
            if(item.id === id){
                item.isSelected = !item.isSelected
            }
        })

        this.setState({
            list: list
        })
    }
    // 全选所有checkbox
    toggleAllCheckbox(ev){
        let {list} = this.state;

        list.forEach((item)=>{
            item.isSelected = ev.target.checked
        })

        this.setState({
            list: list
        })
    }

    //编辑数据
    editDone(id, title){
        let {list} = this.state;
        list.find((item)=>{
            return id === item.id
        }).title = title;
        this.setState({
            list: list
        })
    }

    // 删除一项
    destroy(id){
        let {list} = this.state;
        list = list.filter((item) => {
            return item.id !== id
        })
        this.setState({
            list: list
        })
    }

    // 增加一条
    addItemHandle(ev){
        if(ev.keyCode !== 13) return;
        let {list} = this.state
        list.push({
            id: Math.random(),
            title: ev.target.value,
            isSelected: false
        })
        this.setState({
            list: list
        })
        ev.target.value = '';
    }

    hashChangHandle(){
        let hash = window.location.hash.slice(2);
        this.setState({
            nowShowing: hash
        })
    }

    //清除选中的
    clearAll(){
        let {list} = this.state;
        list = list.filter(item => !item.isSelected)
        this.setState({
            list: list
        })
    }

    componentDidMount(){
        console.log(123)
        this.hashChangHandle()
        window.addEventListener('hashchange', this.hashChangHandle)
    }

    render(){

        let list = this.state.list,sections,footer,num=0,selectLen = 0;

        let filterList = list.filter((item) => {
            if(this.state.nowShowing === 'active'){
                return !item.isSelected
            } else if(this.state.nowShowing === 'completed'){
                return item.isSelected
            }else{
                return true;
            }
        })

        if(list.length){

            // 计算list的未选中length
            num = list.reduce((n,m)=>{
                return m.isSelected ? n : ++n;
            },num)

            // 选中的
            selectLen = list.length - num

            sections = <section className="main">
                            <input 
                                type="checkbox" 
                                className="toggle-all" 
                                checked={!num}
                                onChange={this.toggleAllCheckbox}
                            />
                            <ul className='todo-list'>
                                {
                                    filterList.map((item) => {
                                        return <Item 
                                                    {...item} 
                                                    key={item.id} 
                                                    toggleCheckbox={this.toggleCheckbox}
                                                    editDone={this.editDone}
                                                    destroy={this.destroy}
                                                />
                                    })
                                }
                            </ul>
                        </section>
            footer = <Footer 
                        unSelectLen={num} 
                        selectLen={selectLen} 
                        nowShowing={this.state.nowShowing} 
                        clearAll={this.clearAll}
                     />
        }

        return (
            <section className="todoapp">
                <header className="header" >
                    <h1>todos</h1>
                    <input 
                        className="new-todo" 
                        placeholder="请输入内容"
                        defaultValue=""
                        onKeyUp={this.addItemHandle}
                    />
                </header>
                {sections}
                {footer}
            </section>
        )
    }
}

export default TodoList;
