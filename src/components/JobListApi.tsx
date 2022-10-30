import React, { useState, useEffect } from 'react'
import axios from 'axios'

const JobListApi = ({ title, fetchUrl }) => {
  const [job, setJob] = useState([])

  useEffect(() => {
    async const fetchData = () => {
      const request = await axios.get(fetchUrl)
      console.log(request)
      return request
    }
    fetchData()
  }, [])
  return (
        <div>
            api
        </div>
  )
}

export default JobListApi
