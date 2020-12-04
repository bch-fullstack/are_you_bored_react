import './App.css';
import Contact from './components/pages/Contact'
import Welcome from './components/pages/Welcome'
import YesPage from './components/pages/YesPage'
import NoPage from './components/pages/NoPage'
import Chuck from './components/layout/Chuck'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/yes">
						<YesPage />
					</Route>
					<Route path="/no">
						<NoPage />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/">
						<Welcome />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
