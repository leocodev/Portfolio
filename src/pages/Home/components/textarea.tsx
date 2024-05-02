import React, { TextareaHTMLAttributes } from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#767676',
  },
  '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white !important',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white !important',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.6)',
  },
})

const TextArea = ({
  placeholder,
  name,
  value,
  onChange,
}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <CustomTextField
      label={placeholder}
      variant="outlined"
      multiline
      fullWidth
      margin="normal"
      rows={5}
      sx={{ textarea: { color: 'white' } }}
      value={value}
      name={name}
      onChange={onChange}
    />
  )
}

export default TextArea
