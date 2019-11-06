import React from 'react';

class RemoveBuilding extends React.Component {
    constructor(props){
        super(props)

        this.setState();
    }
    _deleteRow = (event) => {
        event.preventDefault();
        alert("Building was deleted!");
        const index = String(this.props.selectedBuilding - 1);
        delete this.state.newData[index];
        this.selectUpdate();
        this.updateData();
    };
    updateData() {
        this.props.updateData(this.state.newData);
    }

    selectUpdate() {
        this.props.selectedUpdate(-1);
    }

    get deleteRow() {
        return this._deleteRow;
    }
    set deleteRow(value) {
        this._deleteRow = value;
    }

    setState() {
        this.setTheState();
    }

    setTheState() {
        this.state = {
            newData: this.props.data
        };
    }

	render() {
        if(this.props.selectedBuilding !== -1){
            return (
                <div>
                    this.newMethod()
                </div>
                );
        }
        else{
            return(
                <div>
                </div>
            );
        }
	}

    newMethod() {
        return <button type="button" class="btn btn-primary btn-lg" onClick={this.deleteRow}>
            Delete Building
        </button>;
    }
}
export default RemoveBuilding;