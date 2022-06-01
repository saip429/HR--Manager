import {  Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from'./screens/home'
import './App.css';
import Header  from './components/header';
import All from './screens/all'
import Edit from './screens/edit'
import Landing from './screens/landing';
import Footer from './components/footer'


function App() {
  return (
   
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path="/add" element={<Home />}></Route>
        <Route path='/all' element={<All />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
