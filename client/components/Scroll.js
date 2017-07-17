import React from 'react'

class Scroll extends React.Component {
  render() {
    return <div id="scroll">
        <div className="scroll"></div>
            <div className="scroll-body scroll-folded">        
              {this.props.children}
            </div>  
        <div className="scroll"></div>        
    </div>
  }
}

export default Scroll;