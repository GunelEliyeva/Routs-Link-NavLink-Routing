
import './App.css';
import Header from './leyouts/header';
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"

import {Routes, Route} from "react-router-dom"
import NotFound from './pages/not-found';
import Customer from './pages/customer';
import Footer from './leyouts/footer';
import CustomerDetails from './pages/customer-details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/customer/:id' element={<CustomerDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
