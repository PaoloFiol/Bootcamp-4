import React from 'react';

class RemoveBuilding extends React.Component {
    render() {
        const { id, removeBuilding } = this.props;

        return (
            <button onClick={() => removeBuilding(id)} class="btn btn-danger">
                Delete
            </button>
        );
    }
}

export default RemoveBuilding;