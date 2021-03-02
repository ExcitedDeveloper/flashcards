import React from 'react'
import Menu from 'components/Menu'
import Header from 'components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddCard from 'components/AddCard'
import Study from 'components/Study'
import CardList from 'components/CardList'

const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <Menu />
    <main role="main" className="flex-1 overflow-y-hidden">
      <Router>
        <Switch>
          <Route path="/add">
            <AddCard />
          </Route>
          <Route path="/study">
            <Study />
          </Route>
          <Route path="/">
            <CardList />
          </Route>
        </Switch>
      </Router>
    </main>
    <footer>Footer</footer>
  </div>
)

export default Dashboard
