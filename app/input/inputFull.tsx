import { Box, InputLabel, TextField } from '@mui/material'
import React from 'react'

type Props = {
    name: string,
    value: any,
    setvalue: any
}

const InputFull = ({ name, value, setvalue }: Props) => {
    return (
        <>
            <Box sx={{ width: "470px", maxWidth: '100vW' }}>
                <InputLabel sx={() => ({
                    color: "gray",
                })} shrink htmlFor="bootstrap-input">
                    {name}
                </InputLabel>
                <TextField sx={() => ({
                    backgroundColor: "white",
                    fieldset: {
                        border: "none", // حذف کادر هنگام هاور
                    },
                    borderRadius: "8px",

                })} fullWidth placeholder={name} value={value}  onChange={(e)=> setvalue(e.target.value)} variant="outlined" InputLabelProps={{ shrink: true }} />
            </Box>
        </>
    )
}

export default InputFull
