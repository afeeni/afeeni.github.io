import './App.css';
import ButtonAppBar from './components/nav/nav';
import Home from './sections/home/home'
import Code from './sections/code/code'
import Dark from './components/darkButton/Dark'
import {BlueDivider, PinkDivider, PurpleDivider, GreenDivider} from './components/divider/divider'
import About from './sections/about/about';
import Resume from './sections/resume/resume';
import Contact from './sections/contact/contact';
import { Routes , Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
      </header>
      <span>
      {/* <Dark></Dark> */}
    </span>
        <Home className="home"></Home>
        <BlueDivider></BlueDivider>
        <About></About>
        <PinkDivider></PinkDivider>
        <Code></Code>
        <PurpleDivider></PurpleDivider>
        <Resume></Resume>
        <GreenDivider></GreenDivider>
        <Contact></Contact>
        
          <Routes>
             <Route path='/#home' element={<Home />} />  
             <Route path='/#contact' element={<Contact />} />
             <Route path='/#resume' element={<Resume />} />
             <Route path='/#about' element={<About />} />
             <Route path='/#code' element={<Code />} />
          </Routes>


</div>

  );
}

export default App;
