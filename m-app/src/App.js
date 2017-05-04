import React, { Component } from 'react';

import HeaderCom from './components/header'
import ContentCom from './components/content'
import FooterCom from './components/footer'

let list = [
  {
    id: 1,
    title: "hello1",
    isSelected: true
  },
  {
    id: 2,
    title: "hello2",
    isSelected: true
  }
]

class App extends Component {

  constructor(props){
    super(props)
    // 添加状态
    this.state = {
      list:list,
      nowShowing: window.location.hash.slice(2)
    }
  }
  //单选按钮toggle
  changeSeleted(id,checked){
    this.state.list.forEach((item) => {
      if(item.id === id){
        item.isSelected = !item.isSelected
      }
    })
    // 重新更新list
    this.setState({
      list:this.state.list
    })
  }
  // 全选按钮toggle
  toggleCheckAll(ev){
    this.state.list.forEach((item) => {
      item.isSelected = ev.target.checked
    })
    // 重新更新list
    this.setState({
      list:this.state.list
    })
  }

  //添加item
  addTodoHandle(title){
    var list = this.state.list;

    list = list.concat({
      id:Math.random(),
      title:title,
      isSelected: false
    })
    this.setState({
      list:list
    })
  }

  //编辑一项内容
  editItem(id,title){
    this.state.list.forEach((item) => {
      if(item.id === id){
        item.title = title
      }
    })
    // 重新更新list
    this.setState({
      list:this.state.list
    })
  }

  //删除指定项
  destroy(id){
    let newList = this.state.list.filter((item) => {
      return item.id !== id
    })
    // 重新更新list
    this.setState({
      list: newList
    })
  }

  componentDidMount(){
    
    window.addEventListener('hashchange',()=>{
      this.setState({
        nowShowing: window.location.hash.slice(2)
      })
    })
  }

  render() {

    let list = this.state.list,content,footer;
    let filterList = list.filter((item) => {
        if( this.state.nowShowing === 'all' ){
          return true
        }else if(this.state.nowShowing === 'active'){
          return !item.isSelected
        } else if(this.state.nowShowing === 'completed'){
          return item.isSelected
        }
        // 为什么箭头函数最后要返回一个值
        return ''
    })

    if(list.length){
      content = <ContentCom 
                  list={filterList}
                  changeSeleted={this.changeSeleted.bind(this)}
                  toggleCheckAll={this.toggleCheckAll.bind(this)}
                  destroy={this.destroy.bind(this)}
                  editItem={this.editItem.bind(this)}
                />
      footer = <FooterCom list={list} active={this.state.nowShowing} />
    }

    return (
      <section className="todoapp">
        <HeaderCom addTodoHandle={this.addTodoHandle.bind(this)} />
        {content}
        {footer}
      </section>
    );
  }
}

export default App;
