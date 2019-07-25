import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  reloadData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <button onClick={this.reloadData}>Refresh</button>
        </header>

        <ul>
        { this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
      </ul>
      </div>
    );
  }
}

export default App;
