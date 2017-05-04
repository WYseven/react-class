import React, { Component } from 'react';

import Item from './item'

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: this.props.list
        }
    }
    render(){

        let list = this.state.list,itemNodes,footer;
        if(list.length){
            itemNodes = list.map((item) => {
                return <Item key={item.id} />
            })
            footer = 2
        }

        return (
            <section className="todoapp">
                <header className="header" >
                    <h1>todos</h1>
                    <input 
                        className="new-todo" 
                        placeholder="请输入内容"
                    />
                </header>
                <ul>
                    {itemNodes}
                </ul>
                {footer}
            </section>
        )
    }
}

export default TodoList;