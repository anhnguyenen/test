// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { Truyenthuyet } from './components/Truyenthuyet';
// import { Ngungon } from './components/Ngungon';
// import { Cotich } from './components/Cotich';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Pages/Home'
// import Following from './Pages/Following'
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <NavBar />
//         <Banner />
//         <Skills />
//         <Truyenthuyet/>
//         <Ngungon />
//         <Cotich />
//         <Contact />
//         <Footer /> */}
//         <Routes>
//           <Route path= "/" element ={<Home />} /> 
//           <Route path= "/following" element ={<Following />} /> 
//         </Routes>

//       </div>
//     </Router>
//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Truyenthuyet } from './components/Truyenthuyet';
import { Ngungon } from './components/Ngungon';
import { Cotich } from './components/Cotich';


function App() {
  return (
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Truyenthuyet/>
        <Ngungon />
        <Cotich />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;