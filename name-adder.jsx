var React = require('react'),
    model = require('./model.js');

class NameAdder extends React.Component {
    handleSubmit(event) {
        event.preventDefault()

        var input = React.findDOMNode(this.refs.input)

        model.
            call(['names', 'add'],
                [input.value],
                [["name"]]).
            then(jsonEnvelope => this.props.onAdded())
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input ref="input"/>
                <button>add name</button>
            </form>
        )
    }
}

module.exports = NameAdder