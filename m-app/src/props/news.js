import React,{Component} from 'react'
import PropTypes from 'prop-types'

import Item from './item'

class News extends Component {
    static defaultProps = {
        newsTitle: "我是默认标题"
    }
    render(){
        return (
            <div>
                <hi>{this.props.newsTitle}</hi>
                <ul>
                   {
                       this.props.list.map((item,index) =>{
                            return <Item key={index} str={this.props.str} {...item}></Item>
                       })
                   }
                </ul>
            </div>
        )
    }
}

News.propTypes = {
    newsTitle: PropTypes.string,
    list: PropTypes.array
}


export default News;