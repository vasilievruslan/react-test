import React, {Component} from 'react';
import Nums from '../computation.js';

console.log(new Nums(1, 9, 8).getMedian());

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max: '',
      min: '',
      count: '',
      median: 0,
      mode: [],
      mean: 0,
      stdOtclone: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        let {min, max, count} = this.state;
        if(min && max && count) {
          let nums = new Nums(min, max, count);
          this.setState({
            mode: nums.getMode(),
            median : nums.getMedian(),
            stdOtclone: nums.getStdOtclone(),
            mean: nums.getMean(),
          })
        }
      }
    );
  };

  render() {

    return (
      <form className="text-left form-group border rounded p-4 m-3">
        <div className="form-group">
          <label for="min">Min:</label>
          <input min="0" name="min" onChange={this.handleChange} value={this.state.min} type="number" id='min' className="form-control" placeholder="Min value"/>
        </div>
        <div className="form-group">
          <label for="max">Max:</label>
          <input min={Number(this.state.min) + 1} name="max" onChange={this.handleChange} value={this.state.max} type="number" className="form-control" id="max" placeholder="Max value"/>
        </div>
        <div className="form-group">
          <label for="count">Count:</label>
          <input min="0" max="1000000" name="count" onChange={this.handleChange} value={this.state.count} type="number" id='count' className="form-control" placeholder="Count"/>
        </div>
        <div className="mt-2">
          <div>median: {this.state.median}</div>
          <div>modes: {this.state.mode.join('; ')}</div>
          <div>mean: {this.state.mean}</div>
          <div>stdOtclone: {this.state.stdOtclone}</div>
        </div>
      </form>
    )
  }
}

export default Numbers;
