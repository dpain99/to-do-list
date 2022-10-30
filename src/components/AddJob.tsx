import React, { ChangeEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addJob } from '../redux/todoSlice'
import { todoState } from '../constant/type'
import { v4 as autoId } from 'uuid'

const AddJob: React.FC = () => {
  const [todo, setTodo] = useState<todoState>(
    {
      jobName: '',
      id: undefined,
      isCompleted: false
    }
  )
  const dispatch = useAppDispatch()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const job = useAppSelector((state) => state.job.jobList)
  const onClickHandle = (): void => {
    if (todo.jobName === '') {
      alert('You need to write something')
      return
    }
    dispatch(addJob({ ...todo }))
    clearInputs()
  }
  const clearInputs = (): void => {
    setTodo({ jobName: '', id: undefined, isCompleted: false })
  }
  const onChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTodo({
      jobName: event.target.value,
      id: autoId(),
      isCompleted: false
    })
  }

  return (
        <div className='add_job'>
            <TextField id="text_input" label="Your Job" variant="outlined"
             value={todo.jobName}
             onChange={onChangeHandle}
            />
            <Button id='add_btn' variant="outlined"
                startIcon={<AddOutlinedIcon />}
                onClick={onClickHandle}
            >
              Add
            </Button>
        </div>
  )
}

export default AddJob
