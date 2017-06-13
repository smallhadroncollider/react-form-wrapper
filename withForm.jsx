import React from "react";

export default (Component, fields) => class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = fields;
        this.passProps = Object.assign({}, this.props, this.getFieldState());
        this.getValues = this.getValues.bind(this);
    }

    getFieldState() {
        const setup = (fieldState, key) => {
            fieldState[key] = {
                defaultValue: fields[key],
                onChange: e => this.setState({ [key]: e.target.value }),
            };

            return fieldState;
        };

        return Object.keys(fields).reduce(setup, {});
    }

    getValues() {
        return this.state;
    }

    render() {
        return <Component { ...this.passProps } getValues={ this.getValues } />;
    }
};
