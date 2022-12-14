import React, { useEffect, useState } from 'react'
import axios from 'axios'
const JobListApi: React.FC = () => {
  interface dataType {
    userId: Number
    id: Number
    title: string
    completed: boolean
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(Array<dataType>)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true)
      try {
        const { data: response } = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        )
        setData(response)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    void fetchData()
  }, [])

  console.log('data', data)
  console.log('loading', loading)
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          {data.map((item, i) => (
            <span key={i}> {item.title} </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default JobListApi
