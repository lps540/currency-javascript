/** @jsx React.DOM */

'use strict';

var App = React.createClass({
    getInitialState: function() {
        return {result: ''};
    },
    handleChange: function(event) {
        this.setState({result: pronounce(event.target.value)});
    },
    notifyMe: function(event) {
        var options = {
            title: '',
            message: this.state.result,
            type: 'basic',
            iconUrl: 'images/dollar.png'
        };
        var f = function() {
            console.log(this.state.result);
        };
        chrome.notifications.create('', options, f);
    },
    render: function () {
        return (
            <div>
                <h1>Currency Translator</h1>
                <label for='aNumber'>Currency (format: 123.45)</label>
                <input type='text' id='aNumber' onChange={this.handleChange}></input>
                <p>{this.state.result}</p>
                <button onClick={this.notifyMe}>Notify me</button>
            </div>
        );
    }
});

React.renderComponent(<App />, document.getElementById('app'));
