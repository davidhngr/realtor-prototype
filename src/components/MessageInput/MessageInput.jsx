import * as React from "react";
import { TextField } from '@mui/material';

export default function MessageInput({ minRows, maxRows, label, hiddenLabel }) {
    const [message, setMessage] = React.useState('');

    const handleChange = e => {
        setMessage(e.target.value)
    }

    return (
        <TextField
            minRows={minRows}
            maxRows={maxRows}
            InputLabelProps={{ shrink: true, focused: true }}
            InputProps={{
                disableUnderline: true,
                hiddenLabel: hiddenLabel,
                style: {
                    alignItems: 'flex-start',
                    backgroundColor: 'white'
                }
            }}
            sx={{
                "& label.Mui-focused": {
                    color: 'black'
                },
                "& .MuiFilledInput-root": {
                    border: 1,
                    borderColor: 'rgb(134, 144, 153)',
                    borderRadius: 2,
                    '&.Mui-focused': {
                        boxShadow: 'rgb(255 255 255) 0px 0px 0px 1px, rgb(255 153 51) 0px 0px 2px 3px, rgb(236, 141, 47) 0px 0px 2px 4px'
                    },
                },
            }}
            label={label}
            variant='filled'
            margin='none'
            multiline
            value={message}
            onChange={handleChange} />
    )
}

