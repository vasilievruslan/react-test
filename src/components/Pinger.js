import React, {Component} from 'react';
import axios from 'axios';
class Pinger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      ping: 0,
      loading: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      }
    )
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true}, () => {
      let start = new Date().getTime();

      axios.get(this.state.address).then(res => {
        let finish = new Date().getTime();
        this.setState({
          ping: ((finish - start) / 60).toFixed(2),
          loading: false,
        })
      })
    })

  }

  render() {
    return (
      <div className="d-flex flex-column border rounded p-4 m-3 text-left">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="serverAddress">Server address:</label>
            <input name="address" onChange={this.handleChange} type="text" className="form-control" id="serverAddress" placeholder="Enter address"/>
          </div>
          <button className="btn btn-block btn-primary mt-3" disabled={this.state.loading}>Get ping</button>
        </form>
        <div className="mt-auto">Ping: {this.state.ping}</div>
      </div>
    )
  }
}

export default Pinger
