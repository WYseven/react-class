import React,{Component} from 'react'

class FooterCom extends Component {
  // 判断添加class
  classNames(options){
   return Object.keys(options).filter((item) => {
      return options[item]
    }).join(" ")
  }
  render() {
    let unSlectedLen = this.props.list.filter((item) => {
      return item.isSelected
    }).length
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.list.length - unSlectedLen}</strong>
          <span>条未选中</span>
        </span>
        <ul className="filters">
          <li><a href="#/all" className={this.classNames({selected:this.props.active === 'all'})}>All</a></li> 
          <li><a href="#/active" className={this.classNames({selected:this.props.active === 'active'})}>Active</a></li> 
          <li><a href="#/completed" className={this.classNames({selected:this.props.active === 'completed'})}>Completed</a></li>
        </ul>
        <button className="clear-completed">
					Clear completed
				</button>
      </footer>
    );
  }
}

export default FooterCom;