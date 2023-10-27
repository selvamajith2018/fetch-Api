// import the necessary files
//using the keyword import
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import UsersList from './UsersList';
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/EmpList' element={<UsersList/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
