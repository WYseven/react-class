import React from 'react'
import PropTypes from 'prop-types'
import News from './news'

let NewsData = [
    {
        
        list:[
            {title:"重大新闻",data:"1小时前"},
            {title:"重大新闻",data:"1小时前"},
            {title:"重大新闻",data:"1小时前"}
        ]
    },
    {
        newsTitle: '今日之星',
        list:[
            {title:"重大新闻",data:"1小时前"},
            {title:"重大新闻",data:"1小时前"},
            {title:"重大新闻",data:"1小时前"}
        ]
    }
]

let str = '删除'

class App extends React.Component {

    getChildContext(){
        return {
            str: str
        }
    }

    render(){

        let newsShowNode = NewsData.map((item) => {
            return <News {...item} str={str} key={Math.random()} />
        })

        return (
            <div>
                {newsShowNode}
            </div>
        )
    }
}

App.childContextTypes = {
    str: PropTypes.string
}


export default App;
