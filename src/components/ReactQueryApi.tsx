import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { error } from 'console'
interface dataType {
  userId: Number
  id: Number
  title: string
  completed: boolean
}
const ReactQueryApi: React.FC = () => {
  //   const [datas, setDatas] = useState(Array<dataType>)
  const fetchApi = async (): Promise<dataType[]> => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    // setDatas(response.data)
    return response.data
  }
  const { isError, isLoading, data } = useQuery(['post'], fetchApi)
  if (isLoading) {
    return <h1>...Loading</h1>
  }
  if (isError) {
    return <h1> <> Error {error} </> </h1> // tai sao can goi lai trong 1 fragment
  }
  return (
    <div>
      {/* {datas.map((todos, i) => {
        return <h1 key={i}> {todos.title} </h1>
      })} */}

      {data !== undefined
        ? data.map((todos, i) => {
          return <h1 key={i}> {todos.title} </h1>
        })
        : 'undefined data'}

        {/* {if (data !== undefined) {
            console.log('data is array');
        } else {
            console.log('undefined');
        } } */}
    </div>
    // tai sao cau truc if condition khong dung duoc?
  )
}

export default ReactQueryApi
