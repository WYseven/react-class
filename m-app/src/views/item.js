import React,{Component} from 'react'


class Item extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <li className="todo">
                <div className="view">
                    <input type="checkbox" className="toggle" />
                    <label>11</label> 
                    <button className="destroy"></button>
                </div> 
                <input type="text" className="edit" />
            </li>
        )
    }
}

export default Item;