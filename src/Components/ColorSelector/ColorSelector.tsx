"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({options} : {options:any}) {
  const [Color, setColor] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl  size="small" fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Color}
          label="Color"
          onChange={handleChange}
        >
          {options.map((i:any)=>{return <MenuItem key={i}  sx={{fontSize:'.8em'}} value={`${i}`}>{i}</MenuItem>}
          )}
        </Select>
      </FormControl>
    </Box>
  );
}