import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            code: '',
            name: '',
            address: '',
            latitude: '',
            longitude: '',
            newData: this.props.data
        }
    }

    codeUpdate = (event) => {
        this.setState({
            code: event.target.value
        })
    }

    

    nameUpdate = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    addressUpdate = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    latitudeUpdate = (event) => {
        this.setState({
            latitude: event.target.value
        })
    }
    
    longitudeUpdate = (event) => {
        this.setState({
            longitude: event.target.value
        })
    }

    addRow = (event) => {
        event.preventDefault()
        alert("You have just submited a building")

        this.state.newData.push({
            "id": this.props.newestId,
            "code": this.state.code,
            "name": this.state.name,
            "coordinates": {
                "latitude": this.state.latitude,
                "longitude": this.state.longitude
            },
            "address": this.state.address
        })
        this.props.updateData(this.state.newData)
        this.props.incrementNewestId(this.props.newestId)
    }

	render() {
		return (
            <form>
                <div class="form-group">
                    <label >Code</label>
                    <input
                        class="form-control"
                        type='text'
                        value={this.state.code}
                        onChange={this.codeUpdate}
                        placeholder="Enter Building Code"
                    />
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input
                        class="form-control"
                        type='text'
                        value={this.state.name}
                        onChange={this.nameUpdate}
                        placeholder="Enter Building Name"
                    />
                </div>
                <div class="form-group">
                    <label>Address</label>
                    <input
                        class="form-control"
                        type='text'
                        value={this.state.address}
                        onChange={this.addressUpdate}
                        placeholder="Enter Building Address"
                    />
                </div>
                <label class="col-sm-2 col-form-label col-form-label-lg">Coordinates     
                </label>
                <div class="form-row">
                    <div class="form-group col">
                        Latitude
                        <input
                            class="form-control"
                            type='text'
                            value={this.state.latitude}
                            onChange={this.latitudeUpdate}
                            placeholder="Enter a number"
                        />
                    </div>
                    <div class="form-group col">
                        Longitude
                        <input
                            class="form-control"
                            type='text'
                            value={this.state.ongitude}
                            onChange={this.longitudeUpdate}
                            placeholder="Enter a number"
                        />
                    </div>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" onClick={this.addRow}>
                        Add Building
                    </button>
                </div>
            </form>
		);
	}
}
export default AddBuilding;