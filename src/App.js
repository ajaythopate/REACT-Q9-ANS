import './App.css';
import { Dashboard } from './components/Dashboard';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
