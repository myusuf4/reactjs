import React from "react";

class Class extends React.Component{
 constructor(prop){
  super(prop);
  this.state={
    count:0
  }
 }
  render(){
    return(
      <div style={{flex:1}}>
        <h1>Hello Class</h1>
        <h1>COunt:{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        <button onClick={()=>this.setState({count: this.state.count-1})}>-</button>
      </div>
    )
  }
}
export default Class