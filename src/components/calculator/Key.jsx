import React from 'react';

export default class Key extends React.Component {
    render() {
        return (<div onClick={this.props.onClick}>{this.props.text}</div>);
    }
}