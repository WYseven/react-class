import React,{Component} from 'react'
import {classNames} from '../lib/utils'

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {}

        this.clearAll = this.clearAll.bind(this)
    }

    clearAll(){
        this.props.clearAll();
    }

    render(){

        let button,selectLen = this.props.selectLen;

       button = <button 
                    className="clear-completed" 
                    style={{display: selectLen ? "block" : "none"}}
                    onClick={this.clearAll}
                >
                    Clear completed
                </button>

        return (
            <footer className="footer">
                <span className="todo-count">
                <strong>{this.props.unSelectLen}</strong>
                <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li><a href="#/all" className={classNames({selected: this.props.nowShowing === 'all'})}>All</a></li> 
                    <li><a href="#/active" className={classNames({selected: this.props.nowShowing === 'active'})}>Active</a></li> 
                    <li><a href="#/completed" className={classNames({selected: this.props.nowShowing === 'completed'})}>Completed</a></li>
                </ul>
                {button}
            </footer>
        )
    }
}

export default Footer;