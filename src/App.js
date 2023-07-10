import logo from './logo.svg';
import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Aboutus from './components/pages/Aboutus';
import StudyGroups from './components/pages/StudyGroups';
import Reserve from './components/pages/Reserve';
import Reserve2 from './components/pages/Reserve2';
import Confirmation from './components/pages/Confirmation';
import PageNotFound from './components/pages/PageNotFound';


function App() {
  return (

    <Router>

      <div>
      <PageNavbar />

      <Routes>
        <Route exact path='/Project2' element = {<Home />} />
        <Route path='/Project2/Services' element = {<Services />} />
        <Route path='/Project2/Aboutus' element = {<Aboutus />} />
        <Route path='/Project2/StudyGroups' element = {<StudyGroups />} />
        <Route path='/Project2/Reserve' element = {<Reserve/>} />
        <Route path='/Project2/Reserve2' element = {<Reserve2/>} />
        <Route path='/Project2/Confirmation' element = {<Confirmation/>} />
        <Route path='*' element= {<PageNotFound/>} />


      </Routes>


      </div>
      

    </Router>



    
  );
}

export default App;
