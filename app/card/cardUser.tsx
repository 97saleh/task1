import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { User } from '~/services/models';
import { createSearchParams, Link, NavLink } from 'react-router';
import { Grid } from '@mui/material';

type CardUserProps = {
    user: User
}

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >

    </Box>
);


export default function CardUsers({ user: { name, address, familyName, nationalCode, phoneNumber, id } }: CardUserProps) {
    const searchParams = createSearchParams({
        id: id!
    })

    return (
        <Grid to={{ pathname: "/", search: searchParams.toString() }} container sx={{ width: "100%" }} component={Link}>
            <Card sx={{ width: "100%", padding: 2 }} variant="outlined"><React.Fragment>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {familyName}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{name}</Typography>
                    <Grid sx={{
                        fontSize: "12px",
                        mb: 1.5,
                        maxWidth: "200px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}>
                        <Typography sx={{ color: 'text.secondary', mb: 0.5, fontWeight: "bold", }}> آدرس : </Typography>
                        {address}
                    </Grid >

                    <Grid sx={{ fontSize: "12px", mb: 1.5, }}>
                        <Typography sx={{ color: 'text.secondary', mb: 0.5, fontWeight: "bold", }}> موبایل : </Typography>
                        {phoneNumber}
                    </Grid >
                    <Grid sx={{ fontSize: "12px", mb: 1.5, }}>
                        <Typography sx={{ color: 'text.secondary', mb: 0.5, fontWeight: "bold", }}> کد ملی : </Typography>
                        {nationalCode}
                    </Grid >
                </CardContent>
            </React.Fragment></Card>
        </Grid>
    );
}