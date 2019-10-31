import React from 'react';
import RemoveBuilding from './RemoveBuilding';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate, removeBuilding } = this.props;

		const buildingList = data
			.filter(directory => {
				//remove directories that do not match current filter text
				return directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {
				return (
					<tr key={directory.id} >
						<td>{directory.code}</td>
						<td onClick={() => selectedUpdate(directory.id)}>{directory.name}</td>
						<RemoveBuilding id={directory.id} removeBuilding={removeBuilding} />
					</tr>
			);
		});

		return (
			<div>
				{buildingList}
			</div>

		);
	}
}
export default BuilingList;
