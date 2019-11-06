import React from 'react';

class BuilingList extends React.Component {
	
	render() {
		const { data } = this.propsMethod();

		const buildingList = data
		.filter(directory => {
			
			return this.toLower(directory)
		})
		.map(directory => {
			return this.returnMethod(directory);
		});

		const theConst = <div>{buildingList}</div>;
		return theConst;
	}

	returnMethod(directory) {
		return (<tr key={directory.id} data={directory.id} onClick={this.props.selectedUpdate.bind(this, directory.id)}>
			<td>{directory.code} </td>
			<td> {directory.name} </td>
		</tr>);
	}

	toLower(directory) {
		return (directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0)
			|| (directory.code.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0);
	}

	propsMethod() {
		return this.props;
	}
}
export default BuilingList;