import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: '',
      selectedBuilding: []
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    // const list = this.state.selectedBuilding.concat([id])
    const list = this.state.selectedBuilding;
    list.push(id);
    
    this.setState({
      selectedBuilding: list
    })
  }

  addBuilding(fields) {
    const allBuildings = this.state.data;
    const id = allBuildings.length + 1;

    const building = {
      id: id,
      code: fields.code,
      name: fields.name,
      address: fields.address,
      coordinates: {
        latitude: fields.latitude,
        longitude: fields.longitude
      }
    };

    allBuildings.push(building);

    this.setState({
      data: allBuildings
    });
  }

  removeBuilding(id) {
    const allBuildings = this.state.data;

    for (let i = 0; i < allBuildings.length; i++) {
      if (allBuildings[i].id === id) {
        allBuildings.splice(i, 1);
        break;
      }
    }

    this.setState({
      data: allBuildings
    });
  }

  render() {
    console.log(this.state.filterText)
    
    return (
      <div className="bg">
        

        <div class="jumbotron text-center">
          <h1 > UF Directory App</h1>
        </div>
        <div className="container">
          <AddBuilding addBuilding={this.addBuilding.bind(this)} />
        </div>
        <Search 
          filterText={this.state.filterText} 
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                    </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.data}
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
