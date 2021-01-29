import React from 'react'
import Menu from 'components/Menu'
import Header from 'components/Header'

const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <Menu />
    <main role="main">
      <div>Content</div>
    </main>
    <footer>Footer</footer>
  </div>
)

export default Dashboard
