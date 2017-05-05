import React,{Component} from 'react'


class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <footer className="footer">
                <span className="todo-count">
                <strong>0</strong>
                <span>条未选中</span>
                </span>
                <ul className="filters">
                <li><a href="#/all">All</a></li> 
                <li><a href="#/active">Active</a></li> 
                <li><a href="#/completed">Completed</a></li>
                </ul>
                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
        )
    }
}

export default Footer;