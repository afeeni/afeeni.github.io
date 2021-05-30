import './App.css';
import ButtonAppBar from './components/nav/nav';
import Home from './sections/home/home'
import Code from './sections/code/code'
import Divider from './components/divider/divider'
// import Cards from './components/cards/cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
             </header> 
        <Home className="home"></Home>
        <Divider></Divider>
        <Code></Code>
        {/* <Cards></Cards> */}


    </div>
  );
}

export default App;
