import './App.css';
import ButtonAppBar from './components/nav/nav';
import Home from './sections/home/home'
import Code from './sections/code/code'
import {BlueDivider, PinkDivider} from './components/divider/divider'
import About from './sections/about/about';
// import Cards from './components/cards/cards'

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
        {/* <Cards></Cards> */}


    </div>
  );
}

export default App;
