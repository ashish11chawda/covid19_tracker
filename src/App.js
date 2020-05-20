import React from 'react';
import {Cards , Chart , CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';
import graphImage from './images/icon.png';
class App extends React.Component{
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country : country });
  }
  render(){
    const { data , country } = this.state;
    return(
      <div className={styles.container}>
        
        <img src={coronaImage} className={styles.image1} alt="COVID-19"/>
        <img src={graphImage} className={styles.image2} alt="ICON"/>
        
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <p className={styles.paragraph}>Made with <span className={styles.heart}>&#10084;</span> by <span>&copy;</span> Ashish Chawda</p>
        
      </div>

    )
  }
}
export default App;