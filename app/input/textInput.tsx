import  { TextField as BaseTextInput} from '@mui/material';
import React from 'react'

const TextInput = (props:Parameters<typeof BaseTextInput>[0]) => {
  return (
   <BaseTextInput {...props} />
  )
}

export default TextInput
