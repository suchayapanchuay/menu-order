import './App.css';
import Navbar from './view/Navbar';
import Header from './view/Header';
import SpecialMenu from './view/SpecialMenu';
import OtherMenu from './view/OtherMenu';
import Login from './controller/Login'
import Contact from './view/Contact';
import Post from './model/Post'
//import { BrowserRouter as Router ,Routes ,Route , Link} from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <SpecialMenu/>
      <OtherMenu/>
      <Login/>
      <Post/>
      <Contact/>
    </div>
  );
}

export default App;
