// import './components/header';
// import App from './App'

// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//     </div>
//   );
// }

// export default App;
// import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Header from './components/header';
// import Share from './components/share';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
// import Footer from './components/footer';
// import LoginSignUp from './pages/loginSignUp';
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
            {/* <Route path='/item' element={<ItemPage/>} />
            <Route path='/loginsignup' element={<LoginSignUp/>} /> */}
          </Routes>
        </Router>
        {/* <Share></Share> */}
        {/* <Footer></Footer> */}
      </div>
  );
}

export default App;
