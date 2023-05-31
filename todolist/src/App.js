import './App.css';
import Menu from './components/menu/Menu';
import TodoListing from './components/todolisting/TodoListing';
import TopBar from './components/top_bar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Menu/>
      <TodoListing/>
    </div>
  );
}

export default App;
