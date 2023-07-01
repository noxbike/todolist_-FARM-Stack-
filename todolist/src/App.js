import './App.css';
import TopBar from './components/top_bar/TopBar';
import CssBaseline from '@mui/material/CssBaseline';
import { routes} from './components/routes.js'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// dark theme for material design
const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={ darkTheme }>
				<CssBaseline />
				<BrowserRouter>
					<TopBar/>
					<div id='todoListing'>
						<Routes>
							{ routes.map(route => 
								<Route key={ route.path } path={ route.path } element={ route.element }/>
							)}
						</Routes>
					</div>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
