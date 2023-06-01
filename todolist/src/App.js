import './App.css';
import TopBar from './components/top_bar/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes} from './components/routes.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
      <TopBar/>
        <div id='todoListing'>
            <Routes>
              {routes.map(route => 
                <Route path={route.path} element={route.element}/>
              )}
            </Routes>
        </div>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
