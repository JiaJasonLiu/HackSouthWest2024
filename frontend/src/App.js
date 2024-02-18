// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
import Share from './components/share';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Footer from './components/footer';
import Login from './pages/login';
import Stock from './pages/Stock';
// import ProtectedRoutes from './pages/protectedRoutes';

function App() {

  return (
      <div className="App">
        <Header></Header>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            {/* <Route path='/contact' element={<Contact/>} /> */}
            <Route path='/profile' element={<Profile/>} />
            {/* <ProtectedRoutes path="/auth" element={<Profile/>} /> */}
            <Route path='/stocks' element={<Stock/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </Router>
        <Share></Share>
        <Footer></Footer>
      </div>
  );
}

export default App;
