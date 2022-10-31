import React from 'react'
import './App.css'

import { Typography } from '@mui/material'
import AddJob from './components/AddJob'
import JobList from './components/JobList'
import ReactQueryApi from './components/ReactQueryApi'
// import TestDemo from './components/TestDemo'
// import JobListApi from './components/JobListApi'

const App: React.FC = () => {
  return (
    <div className="App">
      <Typography variant='h3' padding='25px'>Todo List</Typography>
      <AddJob></AddJob>
      <JobList></JobList>
      {/* <JobListApi></JobListApi> */}
      {/* <TestDemo></TestDemo> */}
      <ReactQueryApi></ReactQueryApi>
    </div>
  )
}

export default App
