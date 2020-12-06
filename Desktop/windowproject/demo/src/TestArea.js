import React, { Component } from 'react';

class TestArea extends Component {
  render () {
    return (
      <div className="demo-test-area--wrapper">
        <div className="demo-test-area--title">
          <div className="demo-test-area--title-main">Chat Below!</div>
          <div className="demo-test-area--title-sub">
          </div>
        </div>
        <form className="demo-test-area" onSubmit={(e)=> {
          e.preventDefault();
          this.props.onMessage(this.textArea.value);
          this.textArea.value = '';
        }}>
          <div className="demo-test-area--preamble">Use the chat box to start a chat with your fellow homie:</div>
          <textarea
            ref={(e) => { this.textArea = e; }}
            className="demo-test-area--text"
            placeholder="Write your message...."
          />
          <button className="demo-test-area--button"> Send Message! </button>
        </form>
        <p className="demo-test-area--info">
          <br />
          <br/>
        </p>
      </div>
    );
  }
}

export default TestArea;
