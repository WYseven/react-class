import React,{Component} from 'react'
import ReactDOM from 'react-dom';

class ContentCom extends Component {
  constructor(props){
    super(props)
    this.state = {
      editId: null,
      editVal: ''
    }
  }
  // 判断添加class
  classNames(options){
   return Object.keys(options).filter((item) => {
      return options[item]
    }).join(" ")
  }
  // 编辑项改变状态
  editItem(id,title,ev){
    this.setState({
      editId:id,
      editVal:title
    })
  }
  // 编辑内容
  editItemHandle(ev){
    this.setState({
      editVal: ev.target.value
    })
    
  }
  //编辑完成
  editDone(){
    if(this.state.editVal.trim() === ''){
      this.props.destroy(this.state.editId)
      return
    }
    this.props.editItem(this.state.editId, this.state.editVal)
    this.setState({
      editId:null
    })
  }
  componentDidUpdate(props,state){
    if(this.state.editId){
      this.refs['editField'+this.state.editId].focus()
    }    
  }
  render() {

    //是否全部选中
    let list = this.props.list;
    
    // 统计选中多少条
    let slectedLen = list.filter((item) => {
      return item.isSelected
    }).length


    //循环数据渲染
    let listNodes = list.map((item) => {
      return (
        <li 
          className={
            this.classNames({
              completed:item.isSelected,
              editing: this.state.editId === item.id
            })
          }
          key={item.id}
        >
              <div 
                className="view"
              >
                  <input
                    className="toggle" 
                    type="checkbox"
                    checked={item.isSelected} 
                    onChange={this.props.changeSeleted.bind(this,item.id)}
                  />
                  <label onDoubleClick={this.editItem.bind(this,item.id,item.title)}>{item.title}</label>
                  <button className="destroy" onClick={this.props.destroy.bind(this,item.id)}></button>
              </div>
              <input 
                className="edit" 
                value={this.state.editVal} 
                onChange={this.editItemHandle.bind(this)}
                onBlur={this.editDone.bind(this)}
                ref={'editField'+item.id}
              />
          </li>
      )
    })
    
    return (
      <section className="main">
          <input 
            className="toggle-all" 
            type="checkbox" 
            checked={slectedLen === list.length} 
            onChange={this.props.toggleCheckAll}
          />
          <ul className="todo-list">
              {listNodes}
          </ul>
        </section>
    )
  }
}

export default ContentCom;