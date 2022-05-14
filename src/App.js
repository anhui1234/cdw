import './App.css';
import Header from "./Components/header"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./page/Home"
import Footer from "./Components/footer"
import Product from './page/Product';
import About from "./page/About"
function App() {
  return (
    <div className='App'>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/sanpham' element={<Product/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
