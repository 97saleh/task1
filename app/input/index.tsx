import { InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import NumberInput from './numberInput';
import TextInput from './textInput';
import { Controller, type FieldValues, type RegisterOptions } from 'react-hook-form';
type InputProps = Omit<Parameters<typeof TextField>[0], "error" | "name"> & {
    label?: string;
    error?: string;
    name: string;
    rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"> | undefined;
    format?: string;
    mask?: string
}
const Input = ({ rules, name, error, label, sx, type = "text", ...props }: InputProps) => {
    let Component: (props: Parameters<typeof TextField>[0]) => React.ReactElement;

    switch (type) {
        case "number":
            Component = NumberInput
            break;

        default:
            Component = TextInput
            break;
    }

    return (
        <Controller
            rules={rules}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <div >
                    <InputLabel sx={() => ({
                        color: "black",
                        width: "100%",
                        fontSize: "13px"
                    })} htmlFor="bootstrap-input">
                        {label}
                    </InputLabel>
                    <Component onChange={onChange} value={value} sx={{
                        mt: 1,
                        backgroundColor: "white",
                        fieldset: {
                            border: "none",
                        },
                        borderRadius: "8px",
                        ...sx
                    }} {...props} />
                    {error?.message && (
                        <Typography sx={{ fontSize: 10, color: "red", ml: 2, mt: 2 }}>{error?.message}</Typography>
                    )}
                </div>
            )}
        />
    )
}

export default Input
