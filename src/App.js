import React from 'react'
import './App.css'

import { Router, Route, Switch } from 'react-router-dom'
import history from './history'

import Layout from './components/Layout/Layout'
import Summary from './pages/Summary'
import CreateMeal from './pages/CreateMeal'

function App() {
	return (
		<Router history={history}>
			<Layout>
				<Switch>
					<Route path="/" exact component={Summary} />
					<Route path="/create/meal" exact component={CreateMeal} />
				</Switch>
			</Layout>
		</Router>
	)
}

export default App
