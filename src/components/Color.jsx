import React, { Component } from 'react'
import '../components/index.css'

export class Color extends React.Component{
 
  render() {
    let style = {
      backgroundColor : this.props.hexCode
    }
    return (
      <div>
         <div className='color' style={style}
         onClick={this.props.update.bind(this,this.props.index)}>
         <p>{this.props.hexCode}</p>


         </div>
      </div>
    )
  }
}

export default Color
