import React,{Component} from 'react'


class Item extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <li className="todo">
                <div className="view">
                    <input 
                        type="checkbox" 
                        className="toggle" 
                        checked={this.props.isSelected} 
                        
                    />
                    <label>{this.props.title}</label> 
                    <button className="destroy"></button>
                </div> 
                <input type="text" className="edit" />
            </li>
        )
    }
}

export default Item;
