import React, { Component } from 'react';

import Item from './item'
import Footer from './footer'

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: this.props.list
        }
    }
    render(){

        let list = this.state.list,sections,footer;
        if(list.length){
            sections = <section className="main">
                            <input type="checkbox" className="toggle-all" />
                            <ul className='todo-list'>
                                {
                                    list.map((item) => {
                                        return <Item {...item} key={item.id} />
                                    })
                                }
                            </ul>
                        </section>
            footer = <Footer />
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
                {sections}
                {footer}
            </section>
        )
    }
}

export default TodoList;
