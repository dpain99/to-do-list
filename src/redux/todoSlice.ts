import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { todoState } from '../constant/type'
import { RootState } from './store'

interface initialStateType {
  jobList: todoState[]
}

const initialState: initialStateType = {
  jobList: []
}

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addJob: (state, action: PayloadAction<todoState>) => {
      state.jobList.push(action.payload)
    },
    updateJob: (state, action: PayloadAction<todoState>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { payload: { jobName, id, isCompleted } } = action
      // eslint-disable-next-line array-callback-return
      state.jobList.map((job) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        job.id === id ? { ...job, id, isCompleted } : job
      })
    },
    deleteJob: (state, action: PayloadAction<{ id: string | undefined }>) => {
      state.jobList = state.jobList.filter((job) => job.id !== action.payload.id)
    }
  }
})

export const { addJob, updateJob, deleteJob } = todoSlice.actions

export const selectJobList = (state: RootState): todoState[] => state.job.jobList

export default todoSlice.reducer
