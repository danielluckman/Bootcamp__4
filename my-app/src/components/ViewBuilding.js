import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data} = this.props
		
		if(this.props.selectedBuilding < 1){
			return(
				<div>
					<p>
						<i>
							Click on a name to view more information<br />
						</i>
					</p>
					
				</div>
			);
		}
		else{
			const buildingCard = data[this.props.selectedBuilding - 1];
			
			if(buildingCard.address == null){
				buildingCard.address = ''
			}
			if(buildingCard.coordinates == null){
				buildingCard.coordinates = 0
			}
			return (
				<div class="card text-white bg-primary mb-3">
					<div class="card-header">
						{buildingCard.code}
					</div>
					<div class="card-body">
						<h5 class="card-title">{buildingCard.name}</h5>
						<p class="card-text">
						<i>
							Building Address:<br />
							{buildingCard.address}<br />
							Building Coordinates:<br />
							{buildingCard.coordinates.latitude}<br />
							{buildingCard.coordinates.longitude}<br />
						</i>
						
						

						
					</p>
					</div>
				</div>
				
			);
		}
	}
}
export default ViewBuilding;