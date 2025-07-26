import React from 'react'
import './topbar.css'
import { Box, Button } from '@mui/material'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbar-logo'>
                <div className='topbar-logo-blue' >Q</div>
                <div className='topbar-logo-text' >Anfra</div>
                <div className='topbar-logo-kyc' >KYC</div>
            </div>
            <div>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "300px",
                        height: "4px",
                        borderRadius: "5px",
                        backgroundColor: "blue",
                    }}
                /> </div>
            <div>
                <Button 
                sx={()=>({
                    color: "gray" ,
                    fontSize: "12px",
                    marginRight: "15px" ,
                })}
                 variant="text">Back to Main Demo</Button>
                <Button variant="contained">Get Formo</Button>
            </div>
        </div>
    )
}

export default Topbar
