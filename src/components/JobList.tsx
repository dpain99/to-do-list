import { Grid, Box, Paper } from '@mui/material'

import React from 'react'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { styled } from '@mui/material/styles'

import { useAppSelector, useAppDispatch } from '../hooks/hooks'
import { deleteJob, updateJob } from '../redux/todoSlice'

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
const JobList: React.FC = () => {
  const jobList = useAppSelector((state) => state.job.jobList)
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width: '400px',
    border: '1px solid #267ED5',
    alignItems: 'right'
  }))
  const dispatch = useAppDispatch()
  return (
    <div className="job_list">
      <Box margin="50px">
        <Grid
          container
          spacing={{ md: 3 }}
          flexDirection="column"
          alignItems="center"
        >
          {jobList.map((job, i) => (
            <Grid item key={i}>
              <Item key={job.id}>
                {job.jobName}
                <Box className='btn_item'>
                <button id='btn_delete'
                  onClick={() => dispatch(deleteJob({ id: job.id }))}>
                  <DeleteOutlineOutlinedIcon fontSize='small' color='warning' />
                </button>
                <button id='btn_edit'
                  onClick={() => dispatch(updateJob({
                    jobName: job.jobName,
                    id: job.id,
                    isCompleted: job.isCompleted
                  }))}>
                  <ModeEditOutlinedIcon fontSize='small' color='secondary'/>
                </button>
                </Box>

              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default JobList
