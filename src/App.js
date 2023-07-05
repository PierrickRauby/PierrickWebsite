import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CircularProgress from '@mui/material/CircularProgress';
import Home from './components/Home';
import Running from './components/Running';
import './styles.css'; // Import the styles.css file

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch('resume.json');
      const jsonData = await response.json();
      this.setState({ resumeData  : jsonData, loading: false });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { resumeData, loading } = this.state;
  return(
    <div>
    {loading ? (
      <CircularProgress />
    ):(
    <Router>
      <div className="App">
      <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/><Navbar />
        <Routes>
          <Route path="/" element={<Home resumeData={resumeData}/>} />
          {/*TODO: Need to add running data below*/}
          <Route path="/Running" element={<Running />} />
          <Route path="/Run" element={<Running/>} />
        </Routes>
      </div>
    </Router>
    )}
  </div>


  );}
}
export default App;
