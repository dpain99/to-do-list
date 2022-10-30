import React from 'react'
import './App.css'

import { Typography } from '@mui/material'
import AddJob from './components/AddJob'
import JobList from './components/JobList'

const App: React.FC = () => {
  return (
    <div className="App">
      <Typography variant='h3' padding='25px'>Todo List</Typography>
      <AddJob></AddJob>
      <JobList></JobList>
    </div>
  )
}

export default App
