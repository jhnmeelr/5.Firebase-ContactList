var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState() {
    return {
        
    };
}

var App = React.createClass({
    getInitialState: function() {
        return getAppState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState(getAppState());
    },
    render: function() {
        return (
            <div>
                MY APP
            </div>
        );
    }
});

module.exports = App;