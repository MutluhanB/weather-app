import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Control from './components/Control/Control';
import Modal from './components/Modal/Modal';
import WeatherBox from './components/WeatherBox/WeatherBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAddingCity: false,
      input: '',
      cities: ["Ankara"],
    }
    this.toggleAddingMode = this.toggleAddingMode.bind(this);
  }
  


  toggleAddingMode() {
    console.log("clicked")
    this.setState(prevState =>(
      {isAddingCity: !prevState.isAddingCity,
      input:''}
    ))

  }

  onInput = (e) => {
    this.setState({input: e.target.value})
    
    
  }

  onAdd = (e) => {
    if(this.state.input !== ''){

      let tempCities = [...this.state.cities];
      tempCities.push(this.state.input);
      this.setState({cities:tempCities, input:''})
      this.toggleAddingMode()
    }
    
    
  }
  render() {
   
      var buttonStyle = {
        margin:"auto",
        backgroundColor: "white",
        border: "1px solid rgb(120, 203, 236)",
        padding: "16px",
        width: "40%",
        height: "10%",
        cursor: "pointer"
        


      }
      return (
        <React.Fragment>
          <Toolbar/>
          <Modal show={this.state.isAddingCity} onInput = {this.onInput} value={this.state.input}>
                <button style={buttonStyle}  onClick={this.onAdd}>Add City</button>
                <button style={buttonStyle} onClick={this.toggleAddingMode}>Cancel</button>

          </Modal>
          {
            this.state.cities.map(city => (<WeatherBox key={city} city={city}/>))
          }
          <Control clicked={this.toggleAddingMode}/>
          
      </React.Fragment>
    );
  }
}

export default App;
