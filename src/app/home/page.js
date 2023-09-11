import Button from '@mui/material/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
  
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button variant="contained" color="primary">
   Click Me!
</Button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
 
export default Home;