import './App.css';
import ButtonAppBar from './components/nav/nav';
import Home from './sections/home/home'
// import Cards from './components/cards/cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
      </header>
        <Home></Home>
        {/* <Cards></Cards> */}
    </div>
  );
}

export default App;
