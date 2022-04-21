import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const HomeCard = ({carddetail}) => {
  return (
    <>
   <Card>
    <CardHeader
    title = {carddetail.name}
    />
    <CardContent>
        <Typography variant='body' textAlign= "center" color={"red"} >
        {carddetail.detail}
        </Typography>
    </CardContent>
   </Card>
    </>
  )
}

export default HomeCard