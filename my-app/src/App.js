import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding'
import RemoveBuilding from './components/RemoveBuilding'
import Credit from './components/Credit';
import listOfBuildings from './data/data';

class App extends React.Component {
  constructor(props) {
    super(props);
    const newLocal = this.state = {
      _filterText: '',
      get filterText() {
        return this._filterText;
      },
      set filterText(value) {
        this._filterText = value;
      },
      _selectedBuilding: this.newMethod(),
      get selectedBuilding() {
        return this._selectedBuilding;
      },
      set selectedBuilding(value) {
        this._selectedBuilding = value;
      },
      _data: listOfBuildings,
      get data() {
        return this._data;
      },
      set data(value) {
        this._data = value;
      },
      _newestId: listOfBuildings[Object.keys(listOfBuildings).length - 1].id + 1,
      get newestId() {
        return this._newestId;
      },
      set newestId(value) {
        this._newestId = value;
      },
    };
  }

  newMethod() {
    return -1;
  }

  filterUpdate(value) {
    this.newMethod_1(value);
  }

  newMethod_1(value) {
    this.setState({
      _filterText: value,
      get filterText() {
        return this._filterText;
      },
      set filterText(value) {
        this._filterText = value;
      },
    });
  }

  selectedUpdate(id) {
    this.setState({
      _selectedBuilding: id,
      get selectedBuilding() {
        return this._selectedBuilding;
      },
      set selectedBuilding(value) {
        this._selectedBuilding = value;
      },
    })
  }

  updateData(updatedData) {
    this.setState({
      _data: updatedData,
      get data() {
        return this._data;
      },
      set data(value) {
        this._data = value;
      },
    })
  }

  incrementNewestId(id){
    this.setState({
      _newestId: id + 1,
      get newestId() {
        return this._newestId;
      },
      set newestId(value) {
        this._newestId = value;
      },
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText = {this.state.filterText}
          filterUpdate = {this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-dark table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    selectedBuilding = {this.state.selectedBuilding}
                    data={this.state.data}
                    selectedUpdate = {this.selectedUpdate.bind(this)}
                    filterText = {this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                data={this.state.data}
                selectedBuilding = {this.state.selectedBuilding}
              />
              <div className="column2">
                <RemoveBuilding
                  data={this.state.data}
                  selectedBuilding = {this.state.selectedBuilding}
                  selectedUpdate = {this.selectedUpdate.bind(this)}
                  updateData={this.updateData.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="col2">
                <AddBuilding
                  data={this.state.data}
                  updateData={this.updateData.bind(this)}
                  newestId={this.state.newestId}
                  incrementNewestId={this.incrementNewestId.bind(this)}
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;