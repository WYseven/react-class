import A from './a.js'
import B from './b.js'
import React,{Component} from "react";
import ReactDOM from "react-dom";

require('./index.css')

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <h1>123</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('box')
)