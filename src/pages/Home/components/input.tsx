import React, { type InputHTMLAttributes } from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#767676',
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: 'white !important',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
  },
})

const Input = ({ placeholder, name, value, onChange }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <CustomTextField
      label={placeholder}
      variant="standard"
      fullWidth
      margin="normal"
      sx={{ input: { color: 'white' } }}
      value={value}
      name={name}
      onChange={onChange}
    />
  )
}

export default Input
