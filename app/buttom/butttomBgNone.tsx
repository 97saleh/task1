import { Button } from '@mui/material'
import React from 'react'

type Props = {
    name: string,
    icon: any ,
}

const ButttomBgNone = ({name , icon}: Props) => {
  return (
    <>
      <Button sx={()=>({ color: "gray" , display: "flex" , fontSize: "8px" , marginTop: "20px" , })} href="#text-buttons"> {icon} {name} </Button>
    </>
  )
}

export default ButttomBgNone
