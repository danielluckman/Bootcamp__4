import React from 'react';

class RemoveBuilding extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            newData: this.props.data
        }
    }
    deleteRow = (event) => {
        event.preventDefault()
        alert("Building was deleted!")

        //Update the data list that is displaying the buildings
        //I will delete the building data of the building that is selected
        
        //console.log("Selected Building id: ", this.props.selectedBuilding)

        const index = String(this.props.selectedBuilding - 1)
        //console.log("Index we are deleting: ", index)

        delete this.state.newData[index]
        //console.log(this.state.newData)

        //Set building selection to no building, and update data so table updates
        this.props.selectedUpdate(-1)
        this.props.updateData(this.state.newData)
    }

	render() {
        if(this.props.selectedBuilding !== -1){
            return (
                <div>
                    <button type="button" class="btn btn-primary btn-lg" onClick={this.deleteRow}>
                        Delete Building
                    </button>
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
}
export default RemoveBuilding;