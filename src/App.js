import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import ExcerciseDetail from './pages/ExcerciseDetail'
function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width:{xl:'1488px'}}} m='auto'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/excercise/:id' element={<ExcerciseDetail/>} />
        </Routes>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
