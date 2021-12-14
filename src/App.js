import './App.css';
import ButtonAppBar from './components/nav/nav';
import Home from './sections/home/home'
import Code from './sections/code/code'
import {BlueDivider, PinkDivider, PurpleDivider, GreenDivider} from './components/divider/divider'
import About from './sections/about/about';
import Resume from './sections/resume/resume';
import Contact from './sections/contact/contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
             </header> 
        <Home className="home"></Home>
        <BlueDivider></BlueDivider>
        <About></About>
        <PinkDivider></PinkDivider>
        <Code></Code>
        <PurpleDivider></PurpleDivider>
        <Resume></Resume>
        <GreenDivider></GreenDivider>
        <Contact></Contact>


    </div>
  );
}

export default App;
