import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data} = this.propsMethod()
		
		if(this.props.selectedBuilding < 1){
			return this.setDiv();
		}
		else{
			const buildingCard = this.buildCard(data);
			
			this.buildAddr(buildingCard);
			this.setCard(buildingCard);
			return this.divMethod2(buildingCard);
		}
	}

	divMethod2(buildingCard) {
		return (<div class="card text-white bg-primary mb-3">
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
		</div>);
	}

	setCard(buildingCard) {
		if (buildingCard.coordinates == null) {
			buildingCard.coordinates = 0;
		}
	}

	buildAddr(buildingCard) {
		if (buildingCard.address == null) {
			buildingCard.address = '';
		}
	}

	buildCard(data) {
		return data[this.props.selectedBuilding - 1];
	}

	setDiv() {
		return (<div>
			<p>
				<i>
					Click on a name to view more information<br />
				</i>
			</p>

		</div>);
	}

	propsMethod() {
		return this.props;
	}
}
export default ViewBuilding;