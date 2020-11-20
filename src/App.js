import logo from './logo.svg';
import './App.css';
import Contact from './components/pages/Contact'
import Welcome from './components/pages/Welcome'
import YesPage from './components/pages/YesPage'
import NoPage from './components/pages/NoPage'

function App() {
  return (
    <div className="App">
      <Welcome/>
      <YesPage/>
      <NoPage/>
      <Contact/>
    </div>
  );
}

export default App;
