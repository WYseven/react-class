import React,{Component} from 'react'

class HeaderCom extends Component {

  constructor(props){
    super(props)
  }

  addTodoHandle(ev){
    if(ev.keyCode === 13){
       this.props.addTodoHandle(ev.target.value)
       ev.target.value = '';
    }
   
  }
  render() {
    return (
      <header className="header" >
          <h1>todos</h1>
          <input 
            className="new-todo" 
            placeholder="请输入内容" 
            defaultValue="" 
            onKeyUp={this.addTodoHandle.bind(this)}
          />
      </header>
    )
  }
}

export default HeaderCom;
