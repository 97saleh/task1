import { TextField as BaseTextInput } from '@mui/material';
import React from 'react'
import { PatternFormat, type InputAttributes, type PatternFormatProps } from 'react-number-format';
type InputProps = Parameters<typeof BaseTextInput>[0] & {
    format?: string
    mask?: string
}
const NumberInput = ({ mask, format, ...props }: InputProps) => {
    return (
        <PatternFormat
            {...props as PatternFormatProps<InputAttributes>}
            mask={mask}
            format={format || '#'}
            customInput={BaseTextInput as (e: React.ComponentProps<"input">) => React.ReactNode}
        />
    )
}

export default NumberInput
