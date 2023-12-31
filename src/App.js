import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import History from './pages/History';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<LandingPage></LandingPage>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/watch-history' element={<History></History>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
