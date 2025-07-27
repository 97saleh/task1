import React from 'react'
import './topbar.css'
import { Box, Button } from '@mui/material'

const Topbar = () => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "white",
        }} >
            <Box sx={{
                display: "flex",
                alignItems: "center",
                m: 2,
                gap: 0.5,
            }}>
                <Box sx={{
                    backgroundColor: "rgb(106, 106, 255)",
                    color: "white",
                    fontsSize: "32px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    padding: " 5px 15px",
                }} >Q</Box>
                <Box sx={{
                    marginRight: "5px",
                    fontSize: "24px",
                    fontWeight: "bold",
                }}
                >Anfra</Box>
                <Box sx={{
                    marginRight: "5px",
                    backgroundColor: "rgba(128, 128, 128, 0.432)",
                    borderRadius: "10px",
                    padding: "3px 9px",
                    color: " rgb(29, 29, 29)",
                    fontSize: "10px",
                    fontWeight: "300",
                }} >KYC</Box>
            </Box>
        </Box >
    )
}

export default Topbar
