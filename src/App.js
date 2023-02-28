import './App.css';
import LandingPage from './component/LandingPage';
import Login from './component/share/Login';
import Signup from './component/share/Signup';
import HomeStudent from './component/student/HomeStudent'
import ChatPage from './component/student/ChatPage';
import ChatPageT from './component/teacher/ChatPageT';

import logo from './logo.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Admin from './component/admin/Admin';
import HomeTeacher from './component/teacher/HomeTeacher';
function App() {
  return (
    <div className="App">

      
      
      <BrowserRouter>
      <Link to='/'><img className='logo' src={logo}></img></Link>

      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>

        <Route path='/login' element={<Login/>}/>

        <Route path='/signup' element={<Signup/>}/>

        <Route path='/student' element={<HomeStudent/>}/>
        <Route path='/student/chat' element={<ChatPage/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/teacher' element={<HomeTeacher/>}/>
        <Route path='/teacher/chat' element={<ChatPageT/>}/>
      </Routes>
      
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
