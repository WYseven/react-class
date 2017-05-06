import React,{Component} from 'react'
import {classNames} from '../lib/utils'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            editId: null,
            editText: ''
        }

        // 改变函数this指向
        this.toggleCheckbox = this.toggleCheckbox.bind(this)
        this.editItem = this.editItem.bind(this)
        this.editChange = this.editChange.bind(this)
        this.editDone = this.editDone.bind(this)
        this.destroy = this.destroy.bind(this)
        this.editKeyupDone = this.editKeyupDone.bind(this)
    }

    toggleCheckbox(){
       this.props.toggleCheckbox(this.props.id)
    }

    //编辑
    editItem(){
        this.setState({
            editId: this.props.id,
            editText: this.props.title
        },()=>{
            this.editInput.focus()
        })

        this.beforeEditi = this.props.title;
    }


    // 编辑
    editChange(ev){
        this.setState({
            editText: ev.target.value
        })
    }

    //编辑完成
    editDone(){
        let editText = this.state.editText.trim();
        if( !editText ){
            this.destroy()
        }else{
            // 判断是否已经编辑完成
           if(this.state.editId){
            this.props.editDone(this.state.editId, this.state.editText)
            this.setState({
                editId: null
            })
           } 
        }
    }

    editKeyupDone(ev){
        if(ev.keyCode === 13){
            this.editDone()
        }else if(ev.keyCode === 27){
            this.setState({
                editId: null,
                editText: this.beforeEditi
            })
        }
    }

    // 删除一项
    destroy(){
        this.props.destroy(this.props.id)
    }

    render(){
        return (
            <li className={
                classNames({
                    todo: true,
                    completed: this.props.isSelected,
                    editing: this.state.editId === this.props.id
                })
            }>
                <div className="view">
                    <input 
                        type="checkbox" 
                        className="toggle" 
                        checked={this.props.isSelected} 
                        onChange={this.toggleCheckbox}
                    />
                    <label onDoubleClick={this.editItem}>{this.props.title}</label> 
                    <button className="destroy" onClick={this.destroy}></button>
                </div> 
                <input 
                    type="text" 
                    className="edit" 
                    ref={(input)=>{this.editInput = input}}
                    value={this.state.editText}
                    onChange={this.editChange}
                    onBlur={this.editDone}
                    onKeyUp={this.editKeyupDone}
                />
            </li>
        )
    }
}



//给props做验证
Item.propTypes = {
    title: PropTypes.string,
    isSelected: PropTypes.bool,
    customProp(props, proName, componentName){
        //console.log(props, proName, componentName)
    }
}

export default Item;
