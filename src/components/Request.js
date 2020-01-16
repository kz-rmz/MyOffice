import React, { Component } from 'react';

class Request extends Component {
  render() {
    return (
      <div className="Request">
        <div className="request-list__elements">
          <form className="">
            <div className="radio-row">
              <div className="input-row">
                <input
                  type="radio"
                  name="public"
                  value="public"
                  checked={this.state.selectedRadio === 'public'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="public">Public</label>
              </div>
              <div className="input-row">
                <input
                  type="radio"
                  name="private"
                  value="private"
                  checked={this.state.selectedRadio === 'private'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="private">Private</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App;