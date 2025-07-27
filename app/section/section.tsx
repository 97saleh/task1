import React, { useEffect } from 'react'
import "./section.css"
import { Alert, Box, Button, Grid, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Input from '~/input'
import { useCreate, useUpdate, useUser } from '~/services/queries';
import { NavLink, useNavigate, useSearchParams } from 'react-router';
import DoneIcon from '@mui/icons-material/Done';
import { FormProvider, useForm } from "react-hook-form"
import type { User } from '~/services/models';


const Section = () => {
    const [searchParams] = useSearchParams();
    const { data: selectedUser } = useUser(searchParams.get("id") || undefined);
    const methods = useForm<User>({
        defaultValues: {
            address: "",
            familyName: "",
            name: "",
            nationalCode: "",
            phoneNumber: ""
        }
    });
    const { handleSubmit, watch } = methods;
    const navigate = useNavigate();

    const { mutate: create } = useCreate();
    const { mutate: update } = useUpdate();

    useEffect(() => {
        if (selectedUser) {
            methods.reset(selectedUser);
        }
    }, [selectedUser]);

    const onSubmit = (data: User) => {
        const id = selectedUser?.id
        if (id) {
            update({ ...data, id }, {
                onSuccess: () => navigate("/usersList")
            });
        } else {
            create(data, {
                onSuccess: () => navigate("/usersList")
            });
        }
    };


    return (

        <FormProvider  {...methods} >
            <Grid container component={"form"} onSubmit={handleSubmit(onSubmit)} >
                <Grid sx={{ mx: "auto", mt: 5, p: 2, position: "relative" }} >
                    {selectedUser?.state === "locked" && (
                        <React.Fragment>
                            <Box sx={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: "100%", height: "100%", backdropFilter: "blur(10px)", zIndex: 5 }} />
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: "100%", height: "100%", zIndex: 6 }} >
                                <Alert color='error' sx={{ width: "100%" }}>
                                    this user is locked
                                </Alert>
                            </Box>
                        </React.Fragment>
                    )}

                    <Typography>اطلاعات شخصی</Typography>
                    <Grid sx={{ mt: 2 }} container spacing={2}>
                        <Grid size={{ lg: 6 }}>
                            <Input fullWidth label="نام" placeholder='نام' name='name' autoFocus rules={{
                                required: "فیلد اجباری",
                            }}
                            />
                        </Grid>
                        <Grid size={{ lg: 6 }}>
                            <Input fullWidth label="نام خانوادگی" placeholder='نام خانوادگی' name='familyName' rules={{
                                required: "فیلد اجباری",
                            }} />
                        </Grid>
                    </Grid>

                    <Grid size={{ xs: 12 }} mt={2}>
                        <Input fullWidth label="آدرس" placeholder='آدرس' name='address' rules={{
                            required: "فیلد اجباری",
                        }}
                        />
                    </Grid>

                    <Grid sx={{ mt: 2 }} spacing={2} container>
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Input format='###########' type='number' fullWidth label="موبایل" placeholder='موبایل' name='phoneNumber'
                                rules={{
                                    required: "فیلد اجباری",
                                    pattern: {
                                        value: /^09\d{9}$/,
                                        message: "فرمت شماره همراه اشتباه است"
                                    }
                                }
                                } />
                        </Grid>
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Input format='##########' type='number' fullWidth label="کد ملی" placeholder='کد ملی' name="nationalCode"
                                rules={{
                                    required: "فیلد اجباری",
                                }} />
                        </Grid>
                    </Grid>

                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ mt: 2, textAlign: "center", fontWeight: "bold" }}
                    >
                        مدارک را ارسال کنید  <DoneIcon sx={() => ({ margin: "10px", })} />
                    </Button>

                    <Button
                        component={NavLink}
                        to={'/usersList'}
                        variant="text"
                        type="button"
                        fullWidth
                        sx={{ color: "gray", mt: 2, textAlign: "center", fontWeight: "bold" }}
                    >
                        بازگشت <KeyboardBackspaceIcon />
                    </Button>

                </Grid>
            </Grid>
        </FormProvider>
    )
}

export default Section
