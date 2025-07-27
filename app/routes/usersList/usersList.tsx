import React from 'react'
import Topbar from '~/topbar/topbar'
import "./usersList.css"
import axios from 'axios';
import { useUsers } from '~/services/queries';
import CardUsers from '~/card/cardUser';
import { Box, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router';
import AddIcon from '@mui/icons-material/Add';



const UsersList = () => {

    const { data: users, } = useUsers()

    return (
        <div>
            <Topbar />
            <Box sx={{ display: "flex", justifyContent: "center", }}>
                <Button component={NavLink}
                    to={"/"}
                    variant="contained"
                    type="submit"
                    sx={{ mx: "auto", textAlign: "center", fontWeight: "bold", width: "200px", height: "50px", marginTop: "20px", }}
                >
                    مدارک را ارسال کنید  <AddIcon sx={() => ({ margin: "10px", })} />
                </Button>
            </Box>
            <Grid
                container
                spacing={3}
                sx={{
                    px: { xs: 2, sm: 3, md: 6 }, // padding left/right
                    py: 4, // padding top/bottom
                    minHeight: '100vh',
                }}
            >
                {users?.data.map((item) => (
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,   // 1 ستون در xs
                            md: 4,     // 2 ستون در md
                            lg: 3,
                        }}    // 3 ستون در xl
                        key={item.id}
                    >
                        <CardUsers user={item} />
                    </Grid>
                ))}
            </Grid>
        </div >
    )
}

export default UsersList;
