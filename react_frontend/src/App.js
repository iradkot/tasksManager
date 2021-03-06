import React, { Component } from "react";
class App extends Component {
  state = { data: [] };
  
  componentDidMount() {
    this.getTestQuery();
  };
  
  getTestQuery() {
    fetch("http://18.221.245.33:3001/test_query")
      .then(data => data.json())
      .then(res => this.setState({ data: res }))
      .catch(e => console.log({e}));
  };
  
  render() {
    const data = this.state.data.map((item) =>
      <li key={item.id}>{item.firstname} {item.lastname}</li>
    )
    return (
      <div>
        <ol>{data}</ol>
      </div>
    );
  }
}
export default App;
