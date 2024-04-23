import React, {Component} from 'react'
import './Notesbox.css'

class Notesbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes:""
        };
      }
      
  render(){
    return (
        <textarea
                type="text"
                className= "notebox"
                value={this.state.notes} 
                placeholder={this.state.notes ? "" : 'Notes'}
                onChange={(e) => this.setState({ notes: e.target.value })}
        ></textarea>
      )
  }
}

export default Notesbox