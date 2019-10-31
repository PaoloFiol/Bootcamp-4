import React from 'react';

export default ({data, selectedBuilding}) => {
	return (
		<div>
			<p>
				<i>Click on a name to view more information</i>
				<ul>
					{selectedBuilding.map(id => {
						const buildingArr = data.filter(building => {
							return building.id === id;
						});

						const building = buildingArr[0];

						if (building) {
							return (
								<li key={id}>
									<div><b>{building.name}</b></div>

									{building.address !== undefined
										? <div>{building.address}</div>
										: null
									}

									{building.coordinates !== undefined
										? <div>{building.coordinates.latitude}</div>
										: null
									}

									{building.coordinates !== undefined
										? <div>{building.coordinates.longitude}</div>
										: null
									}
									<br/>
								</li>
							);
						} else {
							return null;
						}
					})}
				</ul>
			</p>
		</div>
	);
}

