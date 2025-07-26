import { Button } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

const Buttom = () => {
    return (
        <div>
            <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ textAlign: "center",  fontWeight: "bold" }}
            >
                Submit Documents  <DoneIcon sx={() => ({ margin: "10px", })} />
            </Button>
        </div>
    )
}

export default Buttom
