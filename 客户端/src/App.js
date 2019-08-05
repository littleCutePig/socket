import React, { Component } from 'react';
import io from 'socket.io-client';
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      count: 0
    }
    this.socket = io.connect('http://localhost:5000')
  }
  
  render() {
    return (
      <div>
        hello world
        {this.state.count}
      </div>
    );
  }
  componentDidMount(){
    this.socket.emit('sendNum',1)
    this.socket.on('five',(num)=>{
      this.setState({
        count:num
      })
    })
  }
}

export default App;