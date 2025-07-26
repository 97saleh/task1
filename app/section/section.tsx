import React, { useState } from 'react'
import "./section.css"
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, TextField, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Input from '~/input/input'
import InputFull from '~/input/inputFull'
import Buttom from '~/buttom/buttom'
import ButttomBgNone from '~/buttom/butttomBgNone'
import YourDocuments from '~/yourDuct/yourDuct';

const Section = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [state, setState] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [postcode, setPostcode] = useState("");
    const [agree, setAgree] = useState(false);

    return (
        <div className='section'>
            <div className='section-midlle'>
                <div>Persional Information</div>
                <div className='section-input section-1' >
                    <div className='section-input section-2'>
                        <Input name="fristname" value={firstName} setvalue={setFirstName} />
                    </div>
                    <div className='section-input section-2'>
                        <Input name="Lastname" value={lastName} setvalue={setLastName} />
                    </div>

                </div>

                <div className='section-input section-1' >
                    <div className='section-input section-2'>
                        <InputFull name="state/province" value={state} setvalue={setState} />
                    </div>
                </div>

                <div className='section-input section-1' >
                    <div className='section-input section-2'>
                        <Input name="Address Line1" value={address1} setvalue={setAddress1} />
                    </div>
                    <div className='section-input section-2'>
                        <Input name="Address Line 2" value={address2} setvalue={setAddress2} />
                    </div>

                </div>

                <div className='section-input section-1' >
                    <div className='section-input section-2'>
                        <Input name="City"  value={city} setvalue={setCity} />
                    </div>
                    <div className='section-input section-2'>
                        <Input name="Post Code" value={postcode} setvalue={setPostcode} />
                    </div>

                </div>

                <div className='section-input section-1' >
                    <div className='section-input section-2'>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                />
                            }
                            label={
                                <Typography variant="body2">
                                    I accept the{" "}
                                    <a href="#" style={{ color: "#1976d2" }}>
                                        Terms of Conditions
                                    </a>
                                    {" "} and{" "}
                                    <a href="#" style={{ color: "#1976d2" }}>
                                        Privacy Policy
                                    </a>
                                </Typography>
                            }
                            sx={{ mb: 2 }}
                        />
                    </div>
                </div>

                <Buttom />

                <ButttomBgNone name='Back To Previous' icon={<KeyboardBackspaceIcon />} />
            </div>

            <div className='section-right'>
                <YourDocuments />
            </div>
        </div>
    )
}

export default Section
