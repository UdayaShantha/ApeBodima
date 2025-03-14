import { Container, FormLabel, Grid, TextField,Box } from '@mui/material'
import React from 'react'


function ReviewAddingForm(props) {
  return (
    <Container component="form" autoComplete='off' onSubmit={()=>alert("submit")}>
       <Grid container>
       <Grid item xs={12}>
          <Box sx={props.boxStyle}>
            <FormLabel sx={props.labelWidthStyle} htmlFor='bodimName'>Bodim name</FormLabel>
            <TextField sx={props.feildWidthStyle} id='bodimName' size='small' ></TextField>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={props.boxStyle}>
            <FormLabel sx={props.labelWidthStyle} htmlFor='comment'>Comment</FormLabel>
            <TextField sx={props.feildWidthStyle} id='comment' type='multiline' maxRows={4}></TextField>
          </Box>
        </Grid>
       </Grid>
    </Container>
  )
}

export default ReviewAddingForm
