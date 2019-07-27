import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import api from './api/api';
import Control from './components/Control/Control';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import WeatherBox from './components/WeatherBox/WeatherBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAddingCity: false,
      input: '',
      cities: [],
    }
    this.toggleAddingMode = this.toggleAddingMode.bind(this);
  }
  


  toggleAddingMode() {
    console.log("clicked")
    this.setState(prevState =>(
      {isAddingCity: !prevState.isAddingCity}
    ))

  }

  onInput = (e) => this.setState({input: e.target.value})

  onAdd = () => {
    let tempCities = [...this.state.cities];
    tempCities.push(this.state.input);
    this.setState({cities:tempCities})
    this.toggleAddingMode()
  }
  render() {

      
      return (
        <React.Fragment>
          <Toolbar/>
          <Modal show={this.state.isAddingCity} onInput = {this.onInput}>
                <button onClick={this.onAdd}>Add</button>
                <button onClick={this.toggleAddingMode}>Cancel</button>

          </Modal>
          {
            this.state.cities.map(city => (<WeatherBox city={city}/>))
          }
          <Control clicked={this.toggleAddingMode}/>
          
      </React.Fragment>
    );
  }
}

export default App;
