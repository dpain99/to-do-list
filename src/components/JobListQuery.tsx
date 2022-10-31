import { error } from 'console'
import { isError, useQuery } from 'react-query'
interface dataType {
  userId: Number
  id: Number
  title: string
  completed: boolean
}
const JobListQuery: React.FC = () => {
  const getCharacter: () => Promise<dataType[]> = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    if (!response.ok) {
      throw new Error('Problem fetching data')
    }
    const character: dataType[] = await response.json()
    return character
  }
  const { isLoading, isError, error, data } = useQuery<dataType[]>(
    ['character'], async () => await getCharacter()
  )

  return (

    <div>
        {if(isError) {
            
        }}
    </div>

  )
}

export default JobListQuery
