import React from 'react';

class AddBuilding extends React.Component {
    constructor(props){
        super(props)

        this.setState();
    }

    _codeUpdate = (event) => {
        this.setState({
            code: event.target.value
        });
    };
    get codeUpdate() {
        return this._codeUpdate;
    }
    set codeUpdate(value) {
        this._codeUpdate = value;
    }

    

    _nameUpdate = (event) => {
        this.setState({
            name: event.target.value
        });
    };
    get nameUpdate() {
        return this._nameUpdate;
    }
    set nameUpdate(value) {
        this._nameUpdate = value;
    }

    _addressUpdate = (event) => {
        this.setState({
            address: event.target.value
        });
    };
    get addressUpdate() {
        return this._addressUpdate;
    }
    set addressUpdate(value) {
        this._addressUpdate = value;
    }

    _latitudeUpdate = (event) => {
        this.setState({
            latitude: event.target.value
        });
    };
    get latitudeUpdate() {
        return this._latitudeUpdate;
    }
    set latitudeUpdate(value) {
        this._latitudeUpdate = value;
    }
    
    _longitudeUpdate = (event) => {
        this.setState({
            longitude: event.target.value
        });
    };
    get longitudeUpdate() {
        return this._longitudeUpdate;
    }
    set longitudeUpdate(value) {
        this._longitudeUpdate = value;
    }

    _addRow = (event) => {
        event.preventDefault();
        alert("You have just submited a building");
        this.state.newData.push({
            "id": this.props.newestId,
            "code": this.state.code,
            "name": this.state.name,
            "coordinates": {
                "latitude": this.state.latitude,
                "longitude": this.state.longitude
            },
            "address": this.state.address
        });
        this.props.updateData(this.state.newData);
        this.props.incrementNewestId(this.props.newestId);
    };
    get addRow() {
        return this._addRow;
    }
    set addRow(value) {
        this._addRow = value;
    }

    setState() {
        this.state = {
            code: '',
            name: '',
            address: '',
            latitude: '',
            longitude: '',
            newData: this.props.data
        };
    }

	render() {
        const newLocal = <input class="form-control" type='text' value={this.state.code} onChange={this.codeUpdate} placeholder="Enter Building Code" />;
        const newLocal_1 = <input class="form-control" type='text' value={this.state.name} onChange={this.nameUpdate} placeholder="Enter Building Name" />;
        const newLocal_2 = <input class="form-control" type='text' value={this.state.address} onChange={this.addressUpdate} placeholder="Enter Building Address" />;
		return (
            <form>
                <div class="form-group">
                    <label >Code</label>
                    newLocal
                </div>
                <div class="form-group">
                    <label>Name</label>
                    newLocal_1
                </div>
                <div class="form-group">
                    <label>Address</label>
                    newLocal_2
                </div>
                <label class="col-sm-2 col-form-label col-form-label-lg">Coordinates     
                </label>
                <div class="form-row">
                    <div class="form-group col">
                        Latitude
                        this.newMethod()
                    </div>
                    <div class="form-group col">
                        Longitude
                        this.newMethod_1()
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

    newMethod_1() {
        return <input class="form-control" type='text' value={this.state.ongitude} onChange={this.longitudeUpdate} placeholder="Enter a number" />;
    }

    newMethod() {
        return <input class="form-control" type='text' value={this.state.latitude} onChange={this.latitudeUpdate} placeholder="Enter a number" />;
    }
}
export default AddBuilding;