import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            latitude: 0,
            longitude: 0,
            address: ''
        };
    }

    updateField(key, value) {
        this.setState({
            [key]: value
        });
    }

    render() {
        return (
            <div
                className="form-group"
                style={{
                    border: '1px solid grey',
                   padding: '1em',
            

                }}
            >
                <h4><i>Add New Building Entry</i></h4>

                <label>Code:</label>
                <input
                    type="text"
                    class="form-control form-control-sm"
                    onChange={event => this.updateField('code', event.target.value)}
                />

                <label>Name:</label>
                <input
                    type="text"
                    class="form-control form-control-sm"
                    onChange={event => this.updateField('name', event.target.value)}
                />

                <label>Address:</label>
                <input
                    type="text"
                    class="form-control form-control-sm"
                    onChange={event => this.updateField('address', event.target.value)}
                />

                <label>Latitude:</label>
                <input
                    type="number"
                    class="form-control form-control-sm"
                    onChange={event => this.updateField('latitude', event.target.value)}
                />

                <label>Longitude:</label>
                <input
                    type="number"
                    class="form-control form-control-sm"
                    onChange={event => this.updateField('longitude', event.target.value)}
                />

                <button
                    class="btn btn-primary form-control"
                    onClick={() => this.props.addBuilding(this.state)}
                >
                    Add Building
                </button>
            </div>
        );
    }
}

export default AddBuilding;