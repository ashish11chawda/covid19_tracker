import React from 'react';
import {Cards , Chart , CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/image.png';
import graphImage from './images/icon.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { grey } from '@material-ui/core/colors';

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
        <p className={styles.paragraph1}>Made with <span className={styles.heart}>&#10084;</span> by <span>&copy;</span> Ashish Chawda</p>
        
        <p className={styles.paragraph}>
          <a href="https://www.linkedin.com/in/ashishchawda198/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{color : grey[900]}}/></a>
          <a href="https://github.com/pixan198/" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{color : grey[900]}}/></a>
          <a href="https://twitter.com/ashish11chawda/" target="_blank" rel="noopener noreferrer"><TwitterIcon style={{color : grey[900]}}/></a>
          <a href="https://www.instagram.com/_tachyon._/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{color : grey[900]}}/></a>
        </p>
      </div>

    )
  }
}
export default App;