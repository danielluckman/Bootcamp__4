import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		const val = this.setVal()
		this.updaateFilter(val);
	}
	updaateFilter(val) {
		this.props.filterUpdate(val);
	}

	setVal() {
		return this.returnVal();
	}

	returnVal() {
		return this.myValue.value;
	}

	render() {

		return this.changeFunc();
	}

	changeFunc() {
		return (<form>
			<input type="text" ref={(value) => { this.myValue = value; } } placeholder="Type to Filter" onChange={this.filterUpdate.bind(this)} />
		</form>);
	}
}
export default Search;
