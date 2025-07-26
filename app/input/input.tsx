import { InputLabel, TextField } from '@mui/material'
import React from 'react'

type Props = {
  name: string;
  value: any;
  setvalue : any
};

const Input = ({ name , value  , setvalue} : Props) => {
    return (
        <div>
            <InputLabel sx={() => ({
                color: "black",
            })} shrink htmlFor="bootstrap-input">
               {name}
            </InputLabel>
            <TextField sx={() => ({
                backgroundColor: "white",
                fieldset: {
                    border: "none", // حذف کادر هنگام هاور
                },
                borderRadius: "8px",

            })} id="outlined-basic" placeholder={name} value={value} onChange={(e)=> setvalue(e.target.value)} variant="outlined"  InputLabelProps={{ shrink: true }} />
        </div>
    )
}

export default Input
