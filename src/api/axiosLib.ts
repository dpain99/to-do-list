import { useEffect, useState } from 'react'
import axios from 'axios'

interface dataType {
  userId: Number
  id: Number
  title: string
  completed: boolean
}
const axiosLib = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  // return {
  //    data,
  //    loading
  // }
}

export default axiosLib
