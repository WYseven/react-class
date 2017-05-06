import React from 'react';

class App extends React.Component {

    constructor(props){
        super(props)

        //定义本组件初始状态
        this.state = {
            title: 'hello'
        }

        this.clickHandle = this.clickHandle.bind(this);
        this.changeHandle = this.changeHandle.bind(this);
    }

    // 改变标题处理函数
    clickHandle(){
        console.log(this)
        // 改变状态，自动更新视图
        this.setState({
            title: this.refs.text.value
        })
    }

    changeHandle(ev){
        this.setState({
            title:ev.target.value
        })
    }

    render(){
        return (
            <div>
                <p>{this.state.title}</p>
                {/*不受控组件*/}
                {/*<p>请填写修改的值：<input type="text" ref="text" defaultValue={this.state.title} /></p>*/}
                {/*受控组件*/}
                <p>请填写修改的值：<input type="text" ref="text" value={this.state.title} onChange={this.changeHandle} /></p>
                <input type="button" value="改变标题" onClick={this.clickHandle} />
            </div>
        )
    }
}

export default App;