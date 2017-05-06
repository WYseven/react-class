import React,{Component} from 'react'
import PropTypes from 'prop-types'
import '../css/index.css'

class Item extends Component {
    render(){
        return (
            <li className="new-item">
                <a href="">{this.props.title}</a>
                <span style={{paddingLeft:'50px'}}>发布于：{this.props.data}</span>
                <span style={{paddingLeft:'50px','color':'red'}}>{this.context.str}</span>
            </li>
        )
    }
}

Item.contextTypes = {
    str: PropTypes.string
}


export default Item;